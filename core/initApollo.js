import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import { split } from "apollo-link";
import fetch from "isomorphic-fetch";

let apolloClient = null;

// ===================================================================
// If this code executes on the server, using pluged in 'fetch'
// ===================================================================
if (!process.browser) {
  global.fetch = fetch;
}

// ===================================================================
// Constructing a Apollo Network Interface
// ===================================================================
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql", // Server URL (must be absolute)
  credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
});

// ===================================================================
// Applying Apollo-client middleware(s)
// ===================================================================
const middlewareLink = setContext(() => ({
  headers: {
    authorization: localStorage.getItem("token") || ""
  }
}));

let graphqlConnectionLink = null;

if (process.browser) {
  // If the this code executes on the client, then attach WebSocket
  graphqlConnectionLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    new WebSocketLink({
      uri: `ws://localhost:4000/subscriptions`,
      options: {
        reconnect: true
      }
    }),
    middlewareLink.concat(httpLink)
  );
} else {
  // If the this code executes on the server, don't attach WebSocket
  graphqlConnectionLink = middlewareLink.concat(httpLink);
}

const create = () => {
  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: graphqlConnectionLink,
    cache: new InMemoryCache()
  });
};

export default function initApollo() {
  // ===================================================================
  // Create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  // ===================================================================
  if (!process.browser) {
    return create();
  }

  // ===================================================================
  // Reuse client on the client-side
  // ===================================================================
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}

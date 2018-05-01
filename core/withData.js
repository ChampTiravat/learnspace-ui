import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Head from 'next/head'
import React from 'react'

import initApollo from './initApollo'
import initRedux from './initRedux'

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps(ctx) {
      let serverState = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo()
        const redux = initRedux()

        // Provide the `url` prop data in case a GraphQL query uses it
        const url = { query: ctx.query, pathname: ctx.pathname }

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <Provider store={redux}>
                <ComposedComponent url={url} {...composedInitialProps} />
              </Provider>
            </ApolloProvider>
          )
        } catch (error) {}

        Head.rewind()

        // Extract query data from the store
        const state = redux.getState()

        // serverState = {
        //   apollo: {
        //     data: state.apollo.data
        //   }
        // };
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)
      this.apollo = initApollo()
      this.redux = initRedux(this.props.serverState)
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <Provider store={this.redux}>
            <ComposedComponent {...this.props} />
          </Provider>
        </ApolloProvider>
      )
    }
  }
}

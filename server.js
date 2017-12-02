const express = require("express");
const next = require("next");
const url = require("url");
const pathMatch = require("path-match");

require("dotenv").config();

const app = next({
  dev: process.env.NODE_ENV !== "production" ? true : false
});
const handle = app.getRequestHandler();
const route = pathMatch();
const matchURIScheme = route("/classroom/:id");

app.prepare().then(() => {
  const server = express();
  const PORT = process.env.APP_PORT || 3000;

  server.get("*", (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    const params = matchURIScheme(pathname);

    if (!params) {
      return handle(req, res);
    }

    return app.render(req, res, "/classroom/", Object.assign(params, query));
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`>> Ready to dev on http://localhost:${PORT}`);
  });
});

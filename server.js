const express = require("express");
const compression = require("compression");
const next = require("next");

require("dotenv").config();

const app = next({
  dev: process.env.NODE_ENV !== "production" ? true : false
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const PORT = process.env.APP_PORT || 3000;

  server.use(
    compression({
      level: 9
    })
  );

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`>> Ready to dev on http://localhost:${PORT}`);
  });
});

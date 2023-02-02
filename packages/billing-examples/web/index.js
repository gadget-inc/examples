// @ts-check
import { join } from "path";
import * as fs from "fs";
import express from "express";
import serveStatic from "serve-static";

const __dirname = new URL(".", import.meta.url).pathname;

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);
const STATIC_PATH = process.env.NODE_ENV === "production" ? `${__dirname}/frontend/dist` : `${__dirname}/frontend/`;

const app = express();

// return Shopify's required iframe embedding headers for all requests
app.use((req, res, next) => {
  const shop = req.query.shop;
  if (shop) {
    res.setHeader("Content-Security-Policy", `frame-ancestors https://${shop} https://admin.shopify.com;`);
  }
  next();
});

// serve any static assets built by vite in the frontend folder
app.use(serveStatic(STATIC_PATH, { index: false }));

// serve the client side app for all routes, allowing it to pick which page to render
app.use("/*", async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(fs.readFileSync(join(STATIC_PATH, "index.html")));
});

app.listen(PORT);
console.log(`Backend app listening on ${PORT}`);

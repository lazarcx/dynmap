import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "http://map.bervis.xyz:7119",
    changeOrigin: true,
    ws: true
  })
);

app.listen(10000, () => console.log("Dynmap proxy running on port 10000"));

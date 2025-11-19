import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "http://geo.bervis.xyz:19900",
    changeOrigin: true,
    ws: true
  })
);

app.listen(10000, () => console.log("Dynmap proxy running on port 10000"));

import path from "path";
import express from "express";

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

app.get("/api", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send("{\"message\":\"Hello world!\"}");
});

export default app;
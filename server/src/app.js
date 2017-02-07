import path from "path";
import express from "express";

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

app.get("/api", (request, response) => {
  response.set("Content-Type", "application/json");
  response.send("{\"message\":\"Hello world!\"}");
});

export default app;
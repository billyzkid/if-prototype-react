"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set("port", process.env.PORT || 3001);
app.use(_express2.default.static(_path2.default.resolve(__dirname, "..", "client", "build")));

app.get("/api", function (request, response) {
  response.set("Content-Type", "application/json");
  response.send("{\"message\":\"Hello world!\"}");
});

exports.default = app;
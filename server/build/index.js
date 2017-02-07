"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _app2.default.get("port");

_app2.default.listen(port, function () {
  return console.log("Server is listening on port " + port);
});
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.writeFile = exports.withoutTrailingSlash = exports.sitemapsUtils = exports.renameFile = exports.readFile = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _pify = _interopRequireDefault(require("pify"));
var withoutTrailingSlash = function withoutTrailingSlash(path) {
  return path === "/" ? path : path.replace(/\/$/, "");
};
exports.withoutTrailingSlash = withoutTrailingSlash;
var writeFile = (0, _pify.default)(_fsExtra.default.writeFile);
exports.writeFile = writeFile;
var renameFile = (0, _pify.default)(_fsExtra.default.rename);
exports.renameFile = renameFile;
var readFile = (0, _pify.default)(_fsExtra.default.readFile);
exports.readFile = readFile;
var sitemapsUtils = {
  getDeclarations: function getDeclarations() {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + "<?xml-stylesheet type=\"text/xsl\" href=\"sitemap.xsl\"?>";
  }
};
exports.sitemapsUtils = sitemapsUtils;
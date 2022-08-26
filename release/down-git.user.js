// ==UserScript==
// @name        Down Git
// @description Create GitHub Resource Download Link.
// @namespace   http://mogeko.me
// @supportURL  https://github.com/mogeko/userscripts/issues
// @match       https://github.com/**
// @match       https://github.com/**/tree/**
// @match       https://github.com/**/blob/**
// @icon        https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com
// @downloadURL https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/down-git.user.js
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/down-git.user.js
// @run-at      document-idle
// @author      Mogeko
// @license     MIT
// @version     0.0.3
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  /**
   * <div role="row">
   *  <div><svg class={{icon}}/></div>,
   *  <div><span><a>{{name}}</a></span></div>,
   *  <div><span><a>{{message}}</a></span></div>,
   *  <div><span>{time}</span></div>,
   * </div>
   */ function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for(var i1 = 0, arr2 = new Array(len); i1 < len; i1++)arr2[i1] = arr[i1];
      return arr2;
  }
  function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toArray(arr) {
      return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  var SVG_ICON = '<svg class="octicon octicon-download hx_color-icon-directory" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"/></svg>';
  var DOWN_GIT = "https://minhaskamal.github.io/DownGit";
  var JSDELIVR = "https://cdn.jsdelivr.net";
  // /caiyongji/emoji-list/blob/master/LICENSE
  function downloader(localUrl) {
      var meta = localUrl === null || localUrl === void 0 ? void 0 : localUrl.split("/").filter(function(str) {
          return str;
      });
      var _meta = _toArray(meta); _meta[0]; _meta[1]; var user = _meta[2], repo = _meta[3], flag = _meta[4], branch = _meta[5], rest = _meta.slice(6);
      if (flag === "tree") {
          return "".concat(DOWN_GIT, "/#/home?url=").concat(localUrl);
      } else if (flag === "blob") {
          return "".concat(JSDELIVR, "/gh/").concat(user, "/").concat(repo, "@").concat(branch, "/").concat(rest.join("/"));
      } else {
          return localUrl;
      }
  }
  function setButton(urlNode) {
      var wrapNode = document.createElement("div");
      var linkNode = document.createElement("a");
      var url = downloader(urlNode.href);
      wrapNode.setAttribute("class", "mr-3 flex-shrink-0");
      linkNode.setAttribute("href", url !== null && url !== void 0 ? url : "");
      linkNode.setAttribute("title", "Download ".concat(urlNode.innerHTML));
      linkNode.innerHTML = SVG_ICON;
      wrapNode.appendChild(linkNode);
      return wrapNode;
  }
  document.querySelectorAll("div.Box-row").forEach(function(node) {
      var urlNode = node.querySelector("a");
      var anchorNode = node.querySelector("div.text-right");
      if (!urlNode || urlNode.querySelector("span")) return;
      node.insertBefore(setButton(urlNode), anchorNode);
  });

})();

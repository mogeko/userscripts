// ==UserScript==
// @name        Douban2RARBG
// @description Add direct links to RARBG & TPB from Douban.
// @namespace   https://mogeko.me
// @supportURL  https://github.com/mogeko/userscripts/issues
// @match       https://movie.douban.com/subject/*
// @icon        https://besticon.herokuapp.com/icon?size=80..120..200&url=douban.com
// @downloadURL https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/dist/douban2rarbg.user.js
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/dist/douban2rarbg.user.js
// @author      Mogeko
// @license     MIT
// @version     0.6.2
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
      return arr2;
  }
  function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
  }
  function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
          for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
          }
      } catch (err) {
          _d = true;
          _e = err;
      } finally{
          try {
              if (!_n && _i["return"] != null) _i["return"]();
          } finally{
              if (_d) throw _e;
          }
      }
      return _arr;
  }
  function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  var META_DATA = {
      资源: {
          RARBG: "https://rarbg.to/torrents.php?imdb=%i&order=seeders&by=DESC",
          "RARBG (Mirror)": "https://rarbgmirror.com/torrents.php?imdb=%i&order=seeders&by=DESC",
          TorrentGalaxy: "https://torrentgalaxy.to/torrents.php?search=%i",
          TPB: "https://thepiratebay.org/search.php?q=%i"
      },
      字幕: {
          opensubtitles: "https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i",
          SubHD: "https://subhd.tv/search/%d",
          字幕库: "https://so.zimuku.org/search?q=%i",
          R3SUB: "https://r3sub.com/search.php?s=%i",
          点点字幕: "http://www.ddzimu.com/download/xslist.php?key=%d"
      }
  };
  (function() {
      var ref, ref1;
      var metaRoot = document.querySelector("#info");
      var imdb = (ref1 = metaRoot === null || metaRoot === void 0 ? void 0 : (ref = metaRoot.textContent) === null || ref === void 0 ? void 0 : ref.match(/tt[0-9]{4,}/)) === null || ref1 === void 0 ? void 0 : ref1[0];
      var doubanID = document.location.toString().split("/")[4];
      if (!imdb || !doubanID) return;
      Object.entries(META_DATA).forEach(function(param) {
          var _param = _slicedToArray(param, 2), key = _param[0], sites = _param[1];
          var metaNode = document.createElement("span");
          var plNode = document.createElement("span");
          var attrsNode = document.createElement("span");
          var br = document.createElement("br");
          plNode.setAttribute("class", "pl");
          plNode.textContent = "".concat(key, ": ");
          var links = Object.entries(sites).map(function(param) {
              var _param = _slicedToArray(param, 2), title = _param[0], template = _param[1];
              var handleTemplate = function(template) {
                  var ref = [
                      imdb,
                      doubanID,
                      imdb.replace(/^tt/, "")
                  ], i = ref[0], d = ref[1], x = ref[2];
                  return template.replace("%i", i).replace("%d", d).replace("%x", x);
              };
              var link = document.createElement("a");
              link.setAttribute("href", handleTemplate(template));
              link.setAttribute("target", "_blank");
              link.textContent = title;
              return link;
          });
          attrsNode.setAttribute("class", "attrs");
          links.forEach(function(link, index, array) {
              attrsNode.appendChild(link);
              if (index !== array.length - 1) {
                  attrsNode.innerHTML += " / ";
              }
          });
          metaNode.appendChild(plNode);
          metaNode.appendChild(attrsNode);
          metaRoot.appendChild(metaNode);
          metaRoot.appendChild(br);
      });
  })();

})();

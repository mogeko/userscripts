// ==UserScript==
// @name        Exclude DV
// @description Excluding the result of Dolby Vision in RARBG.to.
// @namespace   https://github.com/mogeko/userscripts
// @supportURL  https://github.com/mogeko/userscripts/issues
// @match       https://rarbg.to/torrents*
// @match       https://rarbg.to/top10
// @icon        https://besticon.herokuapp.com/icon?size=80..120..200&url=rarbg.to
// @downloadURL https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/exclude-dv.user.js
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/exclude-dv.user.js
// @author      Mogeko
// @license     MIT
// @version     0.0.1
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  var HDR = "https://dyncdn.me/static/20/images/categories/cat_new52.gif";
  document.querySelectorAll("table.lista2t tr.lista2").forEach(function(tr) {
      var ref;
      var link = tr.querySelector("td:nth-child(2) > a");
      var cover = tr.querySelector("td:nth-child(1) img");
      if ((link === null || link === void 0 ? void 0 : (ref = link.title) === null || ref === void 0 ? void 0 : ref.includes(".DV.")) && (cover === null || cover === void 0 ? void 0 : cover.src) === HDR) tr.remove();
  });

})();

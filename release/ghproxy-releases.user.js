// ==UserScript==
// @name        GitHub 加速 (Releases)
// @description 通过代理为 GitHub Releases 提供加速
// @namespace   https://mogeko.me
// @supportURL  https://github.com/mogeko/userscripts/issues
// @match       https://github.com/**
// @icon        https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com
// @downloadURL https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/ghproxy-releases.user.js
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/ghproxy-releases.user.js
// @run-at      document-end
// @author      Mogeko
// @license     MIT
// @version     0.2.4
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  var PROXY_URL = "https://ghproxy.com/";
  function agentReleases(proxy) {
      var svgs = document.querySelectorAll(".octicon-package, .octicon-file-zip");
      svgs.forEach(function(svg) {
          var link = svg.parentNode;
          link.href = proxy + link.href;
      });
  }
  agentReleases(PROXY_URL);
  document.addEventListener("pjax:success", function() {
      agentReleases(PROXY_URL);
  });

})();

// ==UserScript==
// @name        GitHub 加速 (Gist)
// @description 通过代理为 GitHub Gist 的 Raw Assets 提供加速
// @namespace   https://mogeko.me
// @supportURL  https://github.com/mogeko/userscripts/issues
// @match       https://gist.github.com/*
// @icon        https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com
// @downloadURL https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/ghproxy-gist-raw.user.js
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/ghproxy-gist-raw.user.js
// @author      Mogeko
// @license     MIT
// @version     0.1.2
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  var PROXY_URL = "https://ghproxy.com/";
  var agentGistRaw = function(proxy) {
      var links = document.querySelectorAll(".file-actions a, .ml-2:nth-last-child(1) a");
      links.forEach(function(link) {
          link.href = proxy + link.href;
      });
  };
  agentGistRaw(PROXY_URL);
  document.addEventListener("pjax:success", function() {
      agentGistRaw(PROXY_URL);
  });

})();

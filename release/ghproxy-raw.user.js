// ==UserScript==
// @name        GitHub 加速 (Raw)
// @description 通过代理为 GitHub Raw Assets 提供加速
// @namespace   https://mogeko.me
// @supportURL  https://github.com/mogeko/userscripts/issues
// @match       https://github.com/**
// @icon        https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com
// @downloadURL https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/ghproxy-raw.user.js
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/ghproxy-raw.user.js
// @run-at      document-end
// @author      Mogeko
// @license     MIT
// @version     0.1.3
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  var PROXY_URL = "https://ghproxy.com/";
  function agentRaw(proxy) {
      var rawButton = document.querySelector("#raw-url");
      if (rawButton) rawButton.href = proxy + window.location.href;
  }
  agentRaw(PROXY_URL);
  document.addEventListener("pjax:success", function() {
      agentRaw(PROXY_URL);
  });

})();

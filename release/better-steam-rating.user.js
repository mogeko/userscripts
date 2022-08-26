// ==UserScript==
// @name        Steam 评分优化脚本
// @description 优化 Steam 的评分系统
// @namespace   https://greasyfork.org/zh-CN/users/113945-mogeko
// @supportURL  https://github.com/mogeko/userscripts/issues
// @match       http://store.steampowered.com/search*
// @icon        https://besticon.herokuapp.com/icon?size=80..120..200&url=store.steampowered.com
// @downloadURL https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/better-steam-rating.user.js
// @updateURL   https://cdn.jsdelivr.net/gh/mogeko/userscripts@master/release/better-steam-rating.user.js
// @author      neilwong; Mogeko (搬运)
// @license     MIT
// @version     0.2.1
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  function hideEle(item) {
      var parentNode = item.parentNode;
      var maxLoop = 15;
      while(parentNode.tagName !== "A" && maxLoop > 0){
          parentNode = parentNode.parentNode;
          maxLoop--;
      }
      item.dataset.isCheck = "1";
      parentNode.style.display = "none";
  }
  function checkFn() {
      var minRealNum = 100;
      var items = document.querySelectorAll(".responsive_search_name_combined");
      items.forEach(function(item2) {
          if (item2.dataset.isCheck) return;
          var days = 0;
          var item = item2.querySelector(".search_review_summary");
          var dateItem = item2.querySelector(".search_released");
          if (dateItem) {
              var dateText = dateItem.innerText;
              var dateArr = dateText.replace("年", "/").replace("月", "/").replace("日", "").split("/");
              if (dateArr.length > 2) {
                  var gameDate = new Date();
                  gameDate.setFullYear(dateArr[0]);
                  gameDate.setMonth(dateArr[1] - 1);
                  gameDate.setDate(dateArr[2]);
                  days = (new Date().getTime() - gameDate.getTime()) / 86400000;
                  days = parseInt(days);
              }
          }
          if (!item) {
              hideEle(item2);
              return;
          }
          var content = item.dataset.tooltipHtml;
          var contentArr = content.split("<br>");
          if (contentArr.length !== 2) {
              console.log(content);
              return;
          }
          var last = contentArr[1];
          var lastArr = last.split(" ");
          if (lastArr < 2) {
              console.log(content);
              return;
          }
          var num = lastArr[0].replace(/\,/g, "");
          var rate = lastArr[2].replace("%", "");
          var realNum = parseInt(num * rate / 100);
          if (isNaN(realNum)) {
              console.log(content);
              return;
          }
          var realRate = "-";
          if (realNum && days) {
              realRate = realNum / days;
              realRate = realRate > 10 ? realRate.toFixed(0) : realRate.toFixed(1);
          }
          var innerHtml = '<span style="padding-left: 0.5em;width: 2em;display: inline-block;">'.concat(rate, '</span><span style="width: 4.5em;display:inline-block;">').concat(parseInt(num * rate / 100), '</span><span style="width: 3em;display:inline-block;">').concat(days, '</span><span style="width:3em;display:inline-block;">').concat(realRate, "</span>");
          item.innerHTML = innerHtml;
          item.style.width = "13em";
          item.style.marginLeft = "-13em";
          item.style.backgroundColor = "#000";
          item.style.backgroundImage = "none";
          item.style.textAlign = "left";
          item.style.color = "#fff";
          item2.dataset.isCheck = "1";
          if (realNum && realNum < minRealNum && realRate !== "-" && realRate < 0.1) {
              hideEle(item);
          }
      });
  }
  setInterval(function() {
      checkFn();
  }, 2000);

})();

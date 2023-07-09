function hideEle(item) {
  let parentNode = item.parentNode;
  let maxLoop = 15;

  while (parentNode.tagName !== "A" && maxLoop > 0) {
    parentNode = parentNode.parentNode;
    maxLoop--;
  }

  item.dataset.isCheck = "1";
  parentNode.style.display = "none";
}

function checkFn() {
  const minRealNum = 100;
  const items = document.querySelectorAll(".responsive_search_name_combined");

  items.forEach((item2) => {
    if (item2.dataset.isCheck) return;

    let days = 0;
    const item = item2.querySelector(".search_review_summary");
    const dateItem = item2.querySelector(".search_released");

    if (dateItem) {
      const dateText = dateItem.innerText;
      const dateArr = dateText
        .replace("年", "/")
        .replace("月", "/")
        .replace("日", "")
        .split("/");
      if (dateArr.length > 2) {
        const gameDate = new Date();
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

    const content = item.dataset.tooltipHtml;
    const contentArr = content.split("<br>");

    if (contentArr.length !== 2) {
      console.log(content);
      return;
    }

    const last = contentArr[1];
    const lastArr = last.split(" ");

    if (lastArr < 2) {
      console.log(content);
      return;
    }

    const num = lastArr[0].replace(/\,/g, "");
    const rate = lastArr[2].replace("%", "");
    const realNum = parseInt((num * rate) / 100);

    if (isNaN(realNum)) {
      console.log(content);
      return;
    }

    let realRate = "-";

    if (realNum && days) {
      realRate = realNum / days;
      realRate = realRate > 10 ? realRate.toFixed(0) : realRate.toFixed(1);
    }

    const innerHtml = `<span style="padding-left: 0.5em;width: 2em;display: inline-block;">${rate}</span><span style="width: 4.5em;display:inline-block;">${parseInt(
      (num * rate) / 100,
    )}</span><span style="width: 3em;display:inline-block;">${days}</span><span style="width:3em;display:inline-block;">${realRate}</span>`;

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

setInterval(() => {
  checkFn();
}, 2000);

export {};

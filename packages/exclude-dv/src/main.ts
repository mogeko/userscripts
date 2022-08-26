const HDR = "https://dyncdn.me/static/20/images/categories/cat_new52.gif";

document.querySelectorAll("table.lista2t tr.lista2").forEach((tr) => {
  const link = tr.querySelector<HTMLLinkElement>("td:nth-child(2) > a");
  const cover = tr.querySelector<HTMLImageElement>("td:nth-child(1) img");

  if (link?.title?.includes(".DV.") && cover?.src === HDR) {
    console.log("[Exclude DV] Remove: ", link?.title);
    tr.remove();
  }
});

export {};

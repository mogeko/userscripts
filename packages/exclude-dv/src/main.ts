const DV_TRAIT = /(\w+[\.\-\ \[\]])+DV[\.\-\ \[\]](\w+[\.\-\ \[\]]?)+/;

document.querySelectorAll("table.lista2t tr.lista2").forEach((tr) => {
  const link = tr.querySelector<HTMLAnchorElement>("td:nth-child(2) > a");

  if (DV_TRAIT.test(link?.innerHTML || "")) {
    console.log("[Exclude DV] Remove: ", link?.title);
    tr.remove();
  }
});

export {};

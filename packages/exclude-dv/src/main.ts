const DV_TRAIT = /(\w+[\.\-\ \[\]])+DV[\.\-\ \[\]](\w+[\.\-\ \[\]]?)+/;

for (const tr of document.querySelectorAll("table.lista2t tr.lista2")) {
  const link = tr.querySelector<HTMLAnchorElement>("td:nth-child(2) > a");

  if (DV_TRAIT.test(link?.innerHTML || "")) {
    console.log("[Exclude DV] Remove: ", link?.title);
    tr.remove();
  }
}

export type {};

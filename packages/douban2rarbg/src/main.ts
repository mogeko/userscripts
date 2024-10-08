const META_DATA = {
  资源: {
    RARBG: "https://rarbg.to/torrents.php?imdb=%i&order=seeders&by=DESC",
    PSA: "https://psa.wf/?s=%i",
    Yify: "https://yts.mx/browse-movies/%i/all/all/0/latest/0/all",
    TorrentGalaxy: "https://torrentgalaxy.to/torrents.php?search=%i",
    TPB: "https://thepiratebay.org/search.php?q=%i",
  },
  字幕: {
    opensubtitles:
      "https://www.opensubtitles.org/zh/search/imdbid-%x/sublanguageid-all/moviename-%i",
    SubHD: "https://subhd.tv/d/%d",
    字幕库: "https://so.zimuku.org/search?q=%i",
    R3SUB: "https://r3sub.com/search.php?s=%i",
    点点字幕: "http://www.ddzimu.com/download/xslist.php?key=%d",
  },
};

(() => {
  const metaRoot = document.querySelector("#info");
  const imdb = metaRoot?.textContent?.match(/tt[0-9]{4,}/)?.[0];
  const doubanID = document.location.toString().split("/")[4];

  if (!imdb || !doubanID) return;

  for (const [key, sites] of Object.entries(META_DATA)) {
    const metaNode = document.createElement("span");
    const plNode = document.createElement("span");
    const attrsNode = document.createElement("span");
    const br = document.createElement("br");

    plNode.setAttribute("class", "pl");
    plNode.appendChild(document.createTextNode(`${key}: `));

    const links = Object.entries(sites).map(([title, template]) => {
      const handleTemplate = (template: string) => {
        const [i, d, x] = [imdb, doubanID, imdb.replace(/^tt/, "")];

        return template.replace("%i", i).replace("%d", d).replace("%x", x);
      };
      const link = document.createElement("a");

      link.setAttribute("href", handleTemplate(template));
      link.setAttribute("target", "_blank");
      link.appendChild(document.createTextNode(title));

      return link;
    });

    attrsNode.setAttribute("class", "attrs");
    links.forEach((link, index, array) => {
      attrsNode.appendChild(link);

      if (index !== array.length - 1) {
        attrsNode.appendChild(document.createTextNode(" / "));
      }
    });

    metaNode.appendChild(plNode);
    metaNode.appendChild(attrsNode);

    metaRoot.appendChild(metaNode);
    metaRoot.appendChild(br);
  }
})();

export type {};

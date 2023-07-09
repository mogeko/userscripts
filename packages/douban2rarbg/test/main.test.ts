import { describe, it, expect } from "vitest";
import { JSDOM } from "jsdom";

describe("douban2rarbg", () => {
  it("should work", async () => {
    window.document = new JSDOM(
      '<div id="info"><span class="pl">IMDb:</span> tt5057130<br /></div>',
      {
        url: "https://movie.douban.com/subject/26629153",
        referrer: "https://movie.douban.com",
        contentType: "text/html",
      },
    ).window.document;

    await import("../src/main");

    const metaRoot = window.document.querySelector("#info");

    expect(metaRoot).not.toBeNull();
    expect(metaRoot?.textContent).toContain("字幕");
    expect(metaRoot?.textContent).toContain("RARBG");
    expect(metaRoot).toMatchSnapshot();
  });

  it("should pass", () => {
    window.document = new JSDOM('<div id="info"></div>', {
      url: "https://movie.douban.com/subject/26629153",
      referrer: "https://movie.douban.com",
      contentType: "text/html",
    }).window.document;

    import("../src/main");

    const metaRoot = window.document.querySelector("#info");

    expect(metaRoot).not.toBeNull();
    expect(metaRoot?.textContent).not.toContain("字幕");
    expect(metaRoot?.textContent).not.toContain("RARBG");
    expect(metaRoot).toMatchSnapshot();
  });
});

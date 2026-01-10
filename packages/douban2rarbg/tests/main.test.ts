import { Window } from "happy-dom";
import { describe, expect, it } from "vitest";

const window = new Window({ url: "https://movie.douban.com/subject/26629153" });
globalThis.document = window.document as unknown as Document;

describe("douban2rarbg", () => {
  it("should work", async () => {
    document.body.innerHTML = `
      <div id="info"><span class="pl">IMDb:</span> tt5057130<br /></div>
    `;

    await import("@/main");

    const metaRoot = document.querySelector("#info");

    expect(metaRoot).not.toBeNull();
    expect(metaRoot?.textContent).toContain("字幕");
    expect(metaRoot?.textContent).toContain("RARBG");
    expect(metaRoot).toMatchSnapshot();
  });

  it("should pass", async () => {
    document.body.innerHTML = `<div id="info"></div>`;

    await import("@/main");

    const metaRoot = document.querySelector("#info");

    expect(metaRoot).not.toBeNull();
    expect(metaRoot?.textContent).not.toContain("字幕");
    expect(metaRoot?.textContent).not.toContain("RARBG");
    expect(metaRoot).toMatchSnapshot();
  });
});

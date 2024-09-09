const PROXY_URL = "https://ghproxy.com/";

function agentReleases(proxy: string) {
  for (const svg of document.querySelectorAll<SVGElement>(
    ".octicon-package, .octicon-file-zip",
  )) {
    const link = svg.parentNode as HTMLLinkElement;

    link.href = proxy + link.href;
  }
}

agentReleases(PROXY_URL);

document.addEventListener("pjax:success", () => {
  agentReleases(PROXY_URL);
});

export type {};

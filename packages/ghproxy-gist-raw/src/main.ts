const PROXY_URL = "https://ghproxy.com/";

function agentGistRaw(proxy: string) {
  for (const link of document.querySelectorAll<HTMLLinkElement>(
    ".file-actions a, .ml-2:nth-last-child(1) a",
  )) {
    link.href = proxy + link.href;
  }
}

agentGistRaw(PROXY_URL);

document.addEventListener("pjax:success", () => {
  agentGistRaw(PROXY_URL);
});

export type {};

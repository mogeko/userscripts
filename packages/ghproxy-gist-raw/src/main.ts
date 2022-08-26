const PROXY_URL = "https://ghproxy.com/";

const agentGistRaw = (proxy: string) => {
  const links = document.querySelectorAll<HTMLLinkElement>(
    ".file-actions a, .ml-2:nth-last-child(1) a"
  );

  links.forEach((link) => {
    link.href = proxy + link.href;
  });
};

agentGistRaw(PROXY_URL);

document.addEventListener("pjax:success", () => {
  agentGistRaw(PROXY_URL);
});

export {};

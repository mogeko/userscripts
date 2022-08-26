const PROXY_URL = "https://ghproxy.com/";

const agentRaw = (proxy: string) => {
  const rawButton = document.querySelector<HTMLLinkElement>("#raw-url");

  if (rawButton) rawButton.href = proxy + window.location.href;
};

agentRaw(PROXY_URL);

document.addEventListener("pjax:success", () => {
  agentRaw(PROXY_URL);
});

export {};

const PROXY_URL = "https://ghproxy.com/";

function agentReleases(proxy: string) {
  const svgs = document.querySelectorAll<SVGElement>(
    ".octicon-package, .octicon-file-zip",
  );

  svgs.forEach((svg) => {
    const link = svg.parentNode as HTMLLinkElement;

    link.href = proxy + link.href;
  });
}

agentReleases(PROXY_URL);

document.addEventListener("pjax:success", () => {
  agentReleases(PROXY_URL);
});

export {};

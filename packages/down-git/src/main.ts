/**
 * <div role="row">
 *  <div><svg class={{icon}}/></div>,
 *  <div><span><a>{{name}}</a></span></div>,
 *  <div><span><a>{{message}}</a></span></div>,
 *  <div><span>{time}</span></div>,
 * </div>
 */

const SVG_ICON = `<svg class="octicon octicon-download hx_color-icon-directory" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"/></svg>`;

const DOWN_GIT = "https://minhaskamal.github.io/DownGit";
const JSDELIVR = "https://cdn.jsdelivr.net";
// /caiyongji/emoji-list/blob/master/LICENSE
function downloader(localUrl: string) {
  const meta = localUrl?.split("/").filter((str) => str);
  const [_a, _b, user, repo, flag, branch, ...rest] = meta;

  if (flag === "tree") {
    return `${DOWN_GIT}/#/home?url=${localUrl}`;
  }
  if (flag === "blob") {
    return `${JSDELIVR}/gh/${user}/${repo}@${branch}/${rest.join("/")}`;
  }
  return localUrl;
}

function setButton(urlNode: HTMLAnchorElement) {
  const wrapNode = document.createElement("div");
  const linkNode = document.createElement("a");
  const url = downloader(urlNode.href);

  wrapNode.setAttribute("class", "mr-3 flex-shrink-0");
  linkNode.setAttribute("href", url ?? "");
  linkNode.setAttribute("title", `Download ${urlNode.innerHTML}`);
  linkNode.innerHTML = SVG_ICON;
  wrapNode.appendChild(linkNode);

  return wrapNode;
}

requestIdleCallback(() => {
  for (const node of document.querySelectorAll("div.Box-row")) {
    const urlNode = node.querySelector("a");
    const anchorNode = node.querySelector("div.text-right");

    if (!urlNode || urlNode.querySelector("span")) return;

    node.insertBefore(setButton(urlNode), anchorNode);
  }
});

export type {};

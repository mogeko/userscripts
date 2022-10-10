# better-steam-rating

**本脚本搬运自: <https://steamcn.com/t385464-1-1>**

**原作者是: [neilwong](https://steamcn.com/suid-792181) (原作者的 [Github](https://github.com/neilwong2012) 页面)**

评分展示的地方分成了四项。

1. 用户好评率
2. 真实好评数 = 评论总数 x 好评率
3. 发售天数 (有可能不准，因为有些 early access 的游戏，真实发售天数要比实际的长)。
4. 平均每日好评数 = 好评总数 / 发售天数

> 我 (原作者) 感觉这项其实可以作为一个评测游戏热度的一个参考。基本大于 1 就可以考虑入库了，大于 5 属于热门游戏，大于 10 基本属于大热游戏。不过由于 early access 的存在，也存在不太准确的情况。
>
> 另外该插件会自动屏蔽非热门游戏，便于喜+1 时筛选。非热门游戏标准: 评论数小于 100 且平均每日好评数小于 0.1
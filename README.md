# DailyPaper

基于 Hugo 和 PaperMod 的静态博客。

网站：https://gulucaptain.github.io/DailyPaper/

## 本地预览

使用 Hugo Extended 0.167.0（与 CI 一致）。PaperMod 最低要求 Hugo 0.146.0。

```sh
git submodule update --init --recursive
hugo version
hugo server
```

## 发布

在 GitHub 仓库 Settings → Pages → Build and deployment 中，将 Source 设置为 **GitHub Actions**。
推送到 `main` 后，`.github/workflows/hugo.yaml` 会检出主题子模块，构建 `public/`，并发布到 GitHub Pages。
也可以在 Actions 中手动运行 **Build and deploy Hugo to Pages**。

不要将 Hugo 源码根目录直接作为分支发布源，也不需要提交 `public/`。
`hugo.toml` 的 `baseURL` 必须包含项目路径 `/DailyPaper/`。
站内链接应使用 Hugo 的 `relref` 或适配子路径的相对地址。

## 搜索与论文介绍

顶部“搜索”和首页“搜索论文”进入 `/search/`。支持论文标题、中英文关键词、arXiv ID / URL、日报日期；可按论文或文章筛选，按相关度或最新日期排序。结果每次显示 20 条。

搜索沿用 PaperMod 的 Fuse 引擎、搜索框与 `post-entry` 卡片，并支持深色模式。`layouts/index.json` 在 Hugo 构建时自动更新索引，无需维护额外数据库：

- 所有未设置 `searchHidden: true` 的普通文章提供全文检索。
- `content/posts/` 内使用现有 `### 论文标题` 格式，并在该节附 arXiv 链接的论文，会额外生成可直达标题锚点的搜索结果。
- 论文卡片优先使用该节的 `**一句话总结：**`，兼容旧文的 `**核心创新点**`；其余格式回退到该节文字。
- 首页和文章列表沿用主题卡片，优先展示 front matter 的 `description`，缺省时使用自动摘要。正文内容保持原样。

主题覆盖文件位于 `layouts/`、`assets/js/fastsearch.js` 和 `assets/css/extended/search.css`，没有改动 PaperMod 子模块；升级主题时需同时核对这些覆盖文件。

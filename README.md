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

顶部“搜索”和首页“搜索论文”进入 `/search/`。支持论文标题、中英文关键词、arXiv ID / URL、日报日期；可按论文或文章筛选，默认按日期从新到旧排列，也可切换为相关度排序。结果每次显示 20 条。

搜索沿用 PaperMod 的 Fuse 引擎、搜索框与 `post-entry` 卡片，并支持深色模式。`layouts/index.json` 在 Hugo 构建时自动更新索引，无需维护额外数据库：

- 所有未设置 `searchHidden: true` 的普通文章提供全文检索。
- `content/posts/` 或 `content/math/` 内使用现有 `### 论文标题` 格式，并在该节附 arXiv 链接的论文，会额外生成可直达标题锚点的搜索结果。
- 论文卡片优先使用该节的 `**一句话总结：**`，兼容旧文的 `**核心创新点**`；其余格式回退到该节文字。
- 首页和文章列表沿用主题卡片，优先展示 front matter 的 `description`，缺省时使用自动摘要。正文内容保持原样。

主题覆盖文件位于 `layouts/`、`assets/js/fastsearch.js` 和 `assets/css/extended/search.css`，没有改动 PaperMod 子模块；升级主题时需同时核对这些覆盖文件。

## 剪藏分类

剪藏页左侧类别自动汇总自 `content/clips/` 文章的 `categories`，无需手动维护类别列表；未填写类别的文章归入“未分类”。默认显示全部文章，全部及分类筛选结果均按文章 `date` 从新到旧排列。手机端类别显示在列表上方，分类链接可复制分享，浏览器前进后退可恢复筛选。

## Math 数学调研栏目

导航中的 Math 指向 `/math/`，列表与正文复用“文章”的 PaperMod 模板，按日期从新到旧排列，每页 10 篇。暂无已发布文章时只显示“暂无文章。”。原有文章的标签元数据和标签链接继续保留，顶部导航不再显示标签入口。

推荐每篇数学文章使用一个独立目录（Hugo leaf bundle），把正文和图片放在一起：

```text
content/
├── posts/                         # 现有 ArXiv 日报
├── clips/                         # 阅读剪藏
└── math/
    ├── _index.md                  # Math 栏目入口（已创建）
    └── topic-slug/                # 后续创建：一个主题一篇文章
        ├── index.md              # 标题、日期、摘要、正文
        └── figures/              # 可选：该文插图
archetypes/
└── math/
    └── index.md                  # 数学调研文章模板（已创建）
```

在仓库根目录创建文章：

```sh
hugo new content --kind math math/topic-slug
hugo server -D
```

将 `topic-slug` 替换成稳定的英文主题名。编辑生成的 `content/math/topic-slug/index.md`：

- `title`：文章标题；`date`：发布日期，决定排序。
- `description`：简短介绍，用于列表卡片和搜索结果。
- `tags`：如线性代数、概率论、优化；`categories` 默认 Math。
- 正文按研究问题、基本概念、核心结论、证明思路、例子、延伸问题、参考资料组织，可按需删减。
- 插图放在该文目录下，用 `![说明](figures/example.png)` 引用。
- 模板默认 `draft: true`，预览确认后改为 `false` 并推送，才会正式发布。

已发布的数学文章自动进入 Math、首页、归档和站内全文搜索；草稿不进入生产站点。目录按主题组织，数学分支用 tags 表达，避免建立多层分类目录而改变文章列表结构。

## 导航缓存

GitHub Pages 的 HTML 响应带有缓存有效期，不同栏目可能暂时保存不同版本。项目覆盖 `layouts/_partials/header.html`，沿用 PaperMod 原导航，只给站内栏目链接追加由菜单名称、地址、顺序计算的 `nav` 版本参数。菜单改变后跳转地址自动更新，避免切换到旧导航的页面缓存；canonical URL 保持原地址。升级 PaperMod 时需同步核对该覆盖模板。已经打开的旧页面需刷新一次以加载新版导航。

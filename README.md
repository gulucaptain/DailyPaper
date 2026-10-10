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

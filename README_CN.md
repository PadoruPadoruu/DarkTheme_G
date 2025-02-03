# 暗黑模式 - Chrome 扩展

一个为所有网站应用暗黑主题的 Google Chrome 扩展，使在低光环境下浏览更加舒适。自定义颜色并管理白名单，确保无缝体验。

## 功能
- **所有网站的暗黑主题**：自动为每个访问的网站应用暗黑主题。
- **可自定义颜色**：调整主题颜色以符合您的偏好。
- **白名单支持**：将特定网站排除在暗黑主题之外。
- **自动调度**：在一天中的特定时间启用暗黑模式。

## 安装
1. 下载 `.crx` 文件或克隆此仓库。
2. 打开 Chrome 并导航到 `chrome://extensions/`。
3. 在右上角启用“开发者模式”。
4. 将 `.crx` 文件拖放到扩展页面，或加载解压的扩展。

## 使用
- 点击扩展图标以切换暗黑主题的开启/关闭。
- 使用选项页面自定义颜色、管理白名单并设置自动调度。

## 开发 (AI 生成)
要修改或构建扩展：
1. 克隆仓库。
2. 使用 `npm install` 安装依赖项（如果有）。
3. 使用 Parcel 等打包工具构建扩展：
   ```bash
   parcel build src/background/index.js src/options/options.js
   ```
4. 在 Chrome 中加载解压的扩展。

## 原始扩展
本项目基于以下原始扩展：
[原始 Super Dark Mode 扩展](https://chrome.google.com/webstore/detail/super-dark-mode/your-extension-id)

## 许可证
本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。



有关本项目的待办事项，请参阅 [待办事项列表](TODO.md) 文件。 
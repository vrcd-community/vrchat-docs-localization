<a name="readme-top"></a>


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Starts][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Code License][code-license-shield]][code-license-url]
[![Doc License][doc-license-shield]][doc-license-url]
[![GitHub Workflow Status][workflow-status-shield]][workflow-status-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vrcd-community/vrchat-docs-localization">
    <img src="docs/public/site-icons/vrcd-locailzation-docs.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">VRChat 汉化文档中心</h3>

  <p align="center">
    一个 VRChat 文档汉化项目
    <br />
    <a href="https://docs.vrczh.org/"><strong>查看文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/vrcd-community/vrchat-docs-localization">开始贡献</a>
    ·
    <a href="https://github.com/vrcd-community/vrchat-docs-localization/issues">反馈问题</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>目录</summary>
  <ol>
    <li>
      <a href="#关于该项目">关于该项目</a>
    </li>
    <li><a href="#使用方法">使用方法</a></li>
    <li><a href="#贡献">贡献</a></li>
    <li><a href="#许可证">许可证</a></li>
    <li><a href="#联系我们">联系我们</a></li>
    <li><a href="#鸣谢">鸣谢</a></li>
  </ol>
</details>

## 关于该项目

[![文档首页截图][product-screenshot]](https://docs.vrczh.org/)

### 目前的覆盖范围

- [VRChat 帮助文档 - The VRChat Documentation Hub](https://docs.vrchat.com/)
- [VRChat 创作者文档 - VRChat Creators Docs](https://creator.vrchat.com/)
- [ClientSim 文档](https://clientsim.docs.vrchat.com/)
- [UdonSharp 文档](https://udonsharp.docs.vrchat.com/)
- [VCC 文档](https://vcc.docs.vrchat.com/)

我们会在未来增加汉化的覆盖范围到社区优秀第三方项目的文档 (将会以单独项目的形式出现)

<p align="right"><a href="#readme-top">返回顶部</a></p>

### 该项目使用以下技术栈构建

* [VitePress](https://vitepress.dev/) - 我们使用 VitePress 作为静态文档生成器
* [Vue.js](https://cn.vuejs.org/)
* [Vite.js](https://cn.vitejs.dev/)
* [VitePWA](https://vite-pwa-org.netlify.app/)

<p align="right"><a href="#readme-top">返回顶部</a></p>

## 使用方法

- 直接访问汉化文档地址: [https://docs.vrczh.org/](https://docs.vrczh.org/)
- 在官方文档地址加上: `https://docs.vrczh.org/` (如: `https://creators.vrchat.com/worlds/udon/networking/` => `https://docs.vrczh.org/creators.vrchat.com/worlds/udon/networking/`)

<p align="right"><a href="#readme-top">返回顶部</a></p>

## 贡献

有了您的贡献，开源社区才能成为学习、启发和创造的绝佳场所。我们对您的任何贡献**万分感激**。

如果您有更好的建议，请 Fork 该仓库并创建 Pull Request。您也可以简单地以 "enhancement"（改进）为标签打开一个问题。
别忘了给这个项目 Star！再次感谢！

[贡献指南](contribution.md)

### 调试该项目

#### 准备工作

1. 确保你的电脑安装了 [Node.js v22 或更新的版本](https://nodejs.org/)
2. 如果你之前没有开启过 Node.js 的 `Corepack` 功能，请在终端内运行 `corepack enable`
3. 使用终端或编辑器打开该项目的目录，并输入 `yarn install` 安装依赖

#### 开始调试

要启动开发服务器，请在终端输入 `yarn run docs:dev`

### 大致流程

1. Fork 该仓库
2. Clone 你的仓库 (`git clone <url to your repo>`)
3. 创建你自己的分支 (`git checkout -b docs/amazingImprovement`)
4. 提交你的更改 (`git commit -m 'Add some amazing improvement'`)
5. 推送你的分支 (`git push origin docs/amazingImprovement`)
6. 创建一个 Pull Request

<p align="right"><a href="#readme-top">返回顶部</a></p>

<!-- LICENSE -->
## 许可证、商标与版权

在 VRChat 汉化文档页面中提及、使用或引用的所有商标、服务商标、集体商标、版权、人格权或类似权利均归其各自的拥有者所有。VRChat 汉化文档中心与上述权利的所有者之间不存在认可（endorse）、附属（affiliate）或任何其他形式的关联。

本项目中使用的所有媒体文件(图片等)均来自于 VRChat .Inc 及其出品的游戏软件 VRChat 中，版权和所有权均为其拥有者所有。

汉化后文档文本在 [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) 下分发，详细请见仓库内 `LICENSE` 文件。代码在 MIT 许可证下分发，详细请见仓库内 `LICENSE-CODE` 文件

All trademarks, service marks, collective marks, copyrights, personality rights, or similar rights mentioned, used, or referenced on the VRChat 汉化文档中心 are the property of their respective owners, and VRChat 汉化文档中心 is not endorsed, affiliated, or otherwise associated with the owners of such rights.

All media sources used in this project are from VRChat Inc. and its game software VRChat, and are copyrighted and owned by their respective owners.

The translated text is distributed under the [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) license, see the `LICENSE` file in the repository for details. The code is distributed under the MIT license, see the `LICENSE-CODE` file in the repository.

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][doc-license-url]

<p align="right"><a href="#readme-top">返回顶部</a></p>

## 免责声明

本项目是一个无条件的公益项目。

本项目是一个翻译 VRChat 官方文档的文档本地化项目。请注意，VRChat .Inc 和其他利益相关方不一定核实了本网站上的文章与信息。

所有本项目上的信息是源于独立的志愿玩家或团体的工作，藉以为 VRChat 中文社区的玩家与创作者们提供便于利用的信息源。

This project is an unconditional public service project.

This project is a translation to the VRChat Official Documentation Chinese Language Centre. Please note that VRChat.Inc, the stakeholders have not necessarily verified the articles and information on this website.

All information on this project is the result of work done by independent volunteer players or groups to provide an easily accessible source of information for players and creators in the VRChat Chinese community.

<!-- CONTACT -->
## 联系我们

- QQ: https://qq.vrcd.org.cn
- KOOK: https://kook.vrcd.org.cn
- Discord: https://discord.vrcd.org.cn
- 哔哩哔哩: https://bilibili.vrcd.org.cn
- VRChat: https://vrchat.vrcd.org.cn

<p align="right"><a href="#readme-top">返回顶部</a></p>

<!-- ACKNOWLEDGMENTS -->
## 鸣谢

* **[VRChat 简体中文本地化小组](https://vrc.group/VRCZH.0723)** - 感谢 VRChat 简体中文本地化小组参与了 VRChat 游戏本体的本地化，其翻译指南和译文对该文档的翻译指南制定提供的巨大帮助。
* **[参与该项目的贡献者][contributors-url]** - 如果没有这些贡献者的参与，就没有该文档。
* **[VitePress](https://vitepress.dev)** - VitePress 是一个简单、强大、快速的静态网站 (SSG) 生成器，让我们可以将以 Markdown 编写的源内容，应用主题，并生成可轻松部署到任何地方的静态 HTML 页面。你所看到的文档站点便是在 VitePress 的基础上搭建而成的。
* **你，和其他同样对 VRChat 中文社区做出贡献的创作者/玩家们** - 没有你们，也不会有该文档的出现

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/vrcd-community/vrchat-docs-localization.svg?style=for-the-badge
[contributors-url]: https://github.com/vrcd-community/vrchat-docs-localization/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/vrcd-community/vrchat-docs-localization.svg?style=for-the-badge
[forks-url]: https://github.com/vrcd-community/vrchat-docs-localization/network/members

[stars-shield]: https://img.shields.io/github/stars/vrcd-community/vrchat-docs-localization.svg?style=for-the-badge
[stars-url]: https://github.com/vrcd-community/vrchat-docs-localization/stargazers

[issues-shield]: https://img.shields.io/github/issues/vrcd-community/vrchat-docs-localization.svg?style=for-the-badge
[issues-url]: https://github.com/vrcd-community/vrchat-docs-localization/issues

[code-license-shield]: https://img.shields.io/badge/CODE%20License-MIT-green.svg?style=for-the-badge
[code-license-url]: https://github.com/vrcd-community/vrchat-docs-localization/blob/master/LICENSE-CODE

[doc-license-shield]: https://img.shields.io/badge/DOC%20License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=for-the-badge
[doc-license-url]: http://creativecommons.org/licenses/by-nc-sa/4.0/

[workflow-status-shield]: https://img.shields.io/github/actions/workflow/status/vrcd-community/vrchat-docs-localization/deploy.yml?style=for-the-badge
[workflow-status-url]: https://github.com/vrcd-community/vrchat-docs-localization/actions/workflows/deploy.yml

[product-screenshot]: screenshot.png
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png

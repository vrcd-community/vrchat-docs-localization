/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { defineConfig } from "vitepress"
import {
  vrcahtDocsSidebars,
  vrchatCreatorsDocsSidebar,
  vccDocsSidebar,
  udonSharpDocsSidebar,
  clientSimDocsSidebar,
} from "./sidebars"

import { withPwa } from "@vite-pwa/vitepress"

// @ts-expect-error it don't have types
import markdownItAbbr from "markdown-it-abbr" // @ts-expect-error it don't have types
import markdownItMark from "markdown-it-mark" // @ts-expect-error it don't have types
import markdownItVideo from "@vrcd-community/markdown-it-video"
import markdownItFootnote from "markdown-it-footnote"
import { align } from "@mdit/plugin-align"
// @ts-expect-error it don't have types
import figure from "markdown-it-image-figures"

// refer https://vitepress.dev/reference/site-config for details
export default withPwa(
  defineConfig({
    lang: "zh-CN",
    title: "VRChat 汉化文档中心",
    description: "一个 VRChat 官方文档简体中文本地化项目",

    lastUpdated: true,
    cleanUrls: true,

    rewrites: {
      "docs.vrchat.com/(.+)/:name": "docs.vrchat.com/docs/:name",
    },

    head: [
      [
        "script",
        {
          defer: "",
          src: "https://static.cloudflareinsights.com/beacon.min.js",
          "data-cf-beacon": '{"token": "7291998cfdb3451c865dde8f653b24d2"}',
        },
      ],
    ],

    sitemap: {
      hostname: "https://docs.vrczh.org",
    },

    themeConfig: {
      outline: {
        label: "该页目录",
        level: "deep",
      },

      footer: {
        message:
          "本项目是一个无条件的公益项目。本项目是一个翻译 VRChat 官方文档的文档本地化项目。请注意，VRChat .Inc 和其他利益相关方不一定核实了本网站上的文章与信息。所有本项目上的信息是源于独立的志愿玩家或团体的工作，藉以为 VRChat 中文社区的玩家与创作者们提供便于利用的信息源。<br/>This project is an unconditional public service project. This project is a translation to the VRChat 汉化文档中心. Please note that VRChat.Inc and other stakeholders have not necessarily verified the articles and information on this website. All information on this project is the result of work done by independent volunteer players or groups to provide an easily accessible source of information for players and creators in the VRChat Chinese community.",
        copyright:
          '<br/>文档汉化文本在 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 许可下分发，文档软件代码在 <a href="https://github.com/vrcd-community/vrchat-docs-localization/blob/main/LICENSE-CODE">MIT 许可证</a>下分发。<br/>The translated text is distributed under the <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license. The code is distributed under the <a href="https://github.com/vrcd-community/vrchat-docs-localization/blob/main/LICENSE-CODE">MIT license</a>.<br/><br/>在 VRChat 汉化文档页面中提及、使用或引用的所有商标、服务商标、集体商标、版权、人格权或类似权利均归其各自的拥有者所有。VRChat 汉化文档中心与上述权利的所有者之间不存在任何认可（endorse）、附属（affiliate）或其他形式的关联。<br/>本项目中使用的所有图片，媒体源均来自于 VRChat .Inc 及其出品的游戏软件 VRChat 中，版权和所有权均为其拥有者所有。<br/>All trademarks, service marks, collective marks, copyrights, personality rights, or similar rights mentioned, used, or referenced on the VRChat 汉化文档中心 are the property of their respective owners, and VRChat 汉化文档中心 is not endorsed, affiliated, or otherwise associated with the owners of such rights.<br/>All images and media sources used in this project are from VRChat Inc. and its game software VRChat, and are copyrighted and owned by their respective owners.',
      },

      docFooter: {
        prev: "上一页",
        next: "下一页",
      },

      externalLinkIcon: true,

      outlineTitle: "该页目录",
      darkModeSwitchLabel: "外观",
      sidebarMenuLabel: "文档目录",
      returnToTopLabel: "返回顶部",
      langMenuLabel: "语言",

      lastUpdated: {
        text: "更新于",
      },

      editLink: {
        pattern:
          "https://github.com/vrcd-community/vrchat-docs-localization/edit/main/docs/:path",
        text: "为此页提供修改建议",
      },

      logo: {
        light: "/site-icons/vrcd-locailzation-docs-light.png",
        dark: "/site-icons/vrcd-locailzation-docs-dark.png",
        width: 24,
        height: 24,
      },

      siteTitle: "VRChat 汉化文档中心",

      nav: [
        { text: "VRChat 帮助文档", link: "/docs.vrchat.com/" },
        {
          text: "VRChat 创作者文档",
          items: [
            { text: "主页", link: "/creators.vrchat.com/" },
            { text: "SDK", link: "/creators.vrchat.com/sdk/" },
            { text: "世界", link: "/creators.vrchat.com/worlds/" },
            { text: "虚拟形象", link: "/creators.vrchat.com/avatars/" },
            { text: "更新", link: "/creators.vrchat.com/index.md" },
          ],
        },
        {
          text: "UdonSharp",
          items: [
            { text: "主页", link: "/udonsharp.docs.vrchat.com/" },
            { text: "快速入门", link: "/udonsharp.docs.vrchat.com/setup" },
            { text: "文档", link: "/udonsharp.docs.vrchat.com/udonsharp" },
            { text: "更新", link: "/udonsharp.docs.vrchat.com/" },
          ],
        },
        {
          text: "创作者助手",
          items: [
            { text: "主页", link: "/vcc.docs.vrchat.com/" },
            {
              text: "指南",
              link: "/vcc.docs.vrchat.com/guides/getting-started",
            },
            { text: "包管理器", link: "/vcc.docs.vrchat.com/vpm/" },
            {
              text: "工具",
              link: "/vcc.docs.vrchat.com/tools/vrc-quick-launcher",
            },
            { text: "更新", link: "/vcc.docs.vrchat.com/" },
          ],
        },
        {
          text: "ClientSim",
          items: [
            { text: "主页", link: "/clientsim.docs.vrchat.com/" },
            { text: "指南", link: "/clientsim.docs.vrchat.com/guides/" },
            { text: "系统", link: "/clientsim.docs.vrchat.com/systems/" },
            { text: "更新", link: "/clientsim.docs.vrchat.com/" },
          ],
        },
      ],

      sidebar: {
        "/docs.vrchat.com/": vrcahtDocsSidebars(),
        "/creators.vrchat.com/": vrchatCreatorsDocsSidebar(),
        "/udonsharp.docs.vrchat.com/": udonSharpDocsSidebar(),
        "/vcc.docs.vrchat.com/": vccDocsSidebar(),
        "/clientsim.docs.vrchat.com/": clientSimDocsSidebar(),
      },

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/vrcd-community/vrchat-docs-localization",
        },
        {
          icon: {
            svg: '<svg t="1673088362735" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5155" width="64" height="64"><path d="M797.75 525.32c25.21-7.79 54.41-34.38 68.71-58q19.71-32.88 19.71-74 0-75.46-44-116.57-40.74-36.62-113.62-36.62H462.61L325.71 675h-2.1l-136.9-434.9H98l177.42 533.57h98.48l145.81-438.53v438.53h76.84V556.2H718c3.73 0 7.31 0.14 10.78 0.38l112 217.09h85.06zM718 481.47H596.55V314.83H718q47.94 0 69 19.43Q808.68 353 808.67 397q0 40.35-21.67 62.77-24.3 21.72-69 21.7z" p-id="5156"></path></svg>',
          },
          link: "https://vrc.group/VRCD.8294",
        },
        {
          icon: {
            svg: '<svg t="1673088505585" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6254" width="64" height="64"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="6255"></path></svg>',
          },
          link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=6BQCK-1aucj1gOYaeB9VDIVBq6UHQlsQ&authKey=4PWEw0t6ey04QFxUoqLlU%2F%2BZh8hkpMzv4sdlx6hVLE4BnpNWXUkk0dCE3IsVjJPT",
        },
      ],

      search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              displayDetails: "显示详细",
              backButtonTitle: "返回",
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "以关闭",
              },
            },
          },
        },
      },
    },

    markdown: {
      container: {
        tipLabel: "提示",
        warningLabel: "警告",
        dangerLabel: "危险",
        infoLabel: "信息",
        detailsLabel: "详细信息",
      },

      config(md) {
        md.use(markdownItAbbr)
          .use(markdownItMark)
          .use(markdownItVideo, {
            youtube: {
              nocookie: true,
              width: "auto",
              height: "auto",
            },
            bilibili: {
              width: "auto",
              height: "auto",
            },
            vimeo: {
              width: "auto",
              height: "auto",
            },
            vine: {
              width: "auto",
              height: "auto",
            },
            prezi: {
              width: "auto",
              height: "auto",
            },
            osf: {
              width: "auto",
              height: "auto",
            },
          })
          // @ts-expect-error type definition error
          .use(markdownItFootnote)
          .use(align)
          .use(figure, {
            lazy: true,
            async: true,
            classes: "doc-content-image",
            figcaption: "alt",
          })
      },
    },

    pwa: {
      outDir: ".vitepress/dist",
      strategies: "generateSW",
      registerType: "prompt",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,mp4,woff2}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      experimental: {
        includeAllowlist: true,
      },
      manifest: {
        name: "VRChat 汉化文档中心",
        short_name: "VRChat 汉化文档中心",
        description: "VRChat 汉化文档中心",
        theme_color: "#1fa588",
        display: "standalone",
        display_override: ["window-controls-overlay", "standalone"],
        lang: "zh",
        start_url: "/",
        dir: "ltr",
        orientation: "natural",
        categories: [
          "development",
          "developer tools",
          "documents",
          "开发",
          "开发工具",
          "文档",
        ],
        handle_links: "preferred",
        edge_side_panel: {
          preferred_width: 480,
        },
        launch_handler: {
          client_mode: ["navigate-existing", "auto"],
        },
        screenshots: [
          {
            src: "/pwa/screenshot-wide.png",
            form_factor: "wide",
            sizes: "1920x1006",
            type: "image/png",
            label: "创作者文档首页",
          },
          {
            src: "/pwa/screenshot-wide-doc.png",
            form_factor: "wide",
            sizes: "1920x1006",
            type: "image/png",
            label: "创作者文档入门文档",
          },
          {
            src: "/pwa/screenshot-phone.png",
            form_factor: "narrow",
            sizes: "390x844",
            type: "image/png",
            label: "创作者文档首页",
          },
          {
            src: "/pwa/screenshot-phone-doc.png",
            form_factor: "narrow",
            sizes: "390x844",
            type: "image/png",
            label: "创作者文档入门文档",
          },
        ],
        icons: [
          {
            src: "/site-icons/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/site-icons/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "VRChat 帮助文档",
            url: "/docs.vrchat.com/",
            description:
              "您可以找到全面的指南和文档，帮助您尽快开始玩 VRChat，如果遇到困难，还可以获得支持。",
          },
          {
            name: "VRChat 创作者文档",
            url: "/creators.vrchat.com/",
            description: "利用我们的工具和文档来学习，创作，分享。",
          },
        ],
      },
    },
  })
)

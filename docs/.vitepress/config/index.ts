import { defineConfig } from 'vitepress'
import { vrcahtDocsSidebars, vrchatCreatorsDocsSidebar, vccDocsSidebar, udonSharpDocsSidebar } from './sidebars'

import { VitePWA } from 'vite-plugin-pwa'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'VRChat 汉化文档中心',
  description: '一个 VRChat 官方文档简体中文本地化项目',

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    externalLinkIcon: true,

    outlineTitle: '在该页',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '侧边栏',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',

    lastUpdated: {
      text: '更新于'
    },

    editLink: {
      pattern: 'https://github.com/vrcd-community/vrchat-docs-localization/edit/main/:path',
      text: '为此页提供修改建议'
    },

    logo: { light: '/site-icons/vrcd-locailzation-docs-light.png', dark: '/site-icons/vrcd-locailzation-docs-dark.png', width: 24, height: 24 },

    siteTitle: 'VRChat 汉化文档中心',

    nav: [
      { text: 'VRChat 文档枢纽', link: '/docs.vrchat.com/' },
      {
        text: 'VRChat 创作者文档',
        items: [
          {
            text: 'VRChat 创作者文档',
            items: [
              { text: '主页', link: '/creators.vrchat.com/' },
              { text: '世界', link: '/creators.vrchat.com/worlds/' },
              { text: '虚拟形象', link: '/creators.vrchat.com/avatars/' },
              { text: '更新', link: '/creators.vrchat.com/index.md' },
            ],
          },
          {
            text: 'UdonSharp',
            items: [
              { text: '主页', link: '/udonsharp.docs.vrchat.com/' },
              { text: '文档', link: '/udonsharp.docs.vrchat.com/' },
              { text: '更新', link: '/udonsharp.docs.vrchat.com/' },
            ],
          },
          {
            text: '创作者助手',
            items: [
              { text: '主页', link: '/vcc.docs.vrchat.com/' },
              { text: '文档', link: '/vcc.docs.vrchat.com/' },
              { text: '更新', link: '/vcc.docs.vrchat.com/' },
              { text: '指南', link: '/vcc.docs.vrchat.com/' },
            ],
          },
          {
            text: 'ClientSim',
            items: [
              { text: '主页', link: '/clientsim.docs.vrchat.com/' },
              { text: '文档', link: '/clientsim.docs.vrchat.com/' },
              { text: '更新', link: '/clientsim.docs.vrchat.com/' },
            ],
          },
        ],
      },
      { text: '关于本站', link: '/README' },
    ],

    sidebar: {
      "/docs.vrchat.com/": vrcahtDocsSidebars(),
      "/creators.vrchat.com/": vrchatCreatorsDocsSidebar()
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vrcd-community/vrchat-docs-localization'
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
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示详细',
            backButtonTitle: '返回',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '以关闭'
            }
          }
        }
      }
    }

    // algolia: {
    //   appId: '7H67QR5P0A',
    //   apiKey: 'deaab78bcdfe96b599497d25acc6460e',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:cn']
    //   },
    //   placeholder: '搜索文档',
    //   translations: {
    //     button: {
    //       buttonText: '搜索'
    //     },
    //     modal: {
    //       searchBox: {
    //         resetButtonTitle: '清除查询条件',
    //         resetButtonAriaLabel: '清除查询条件',
    //         cancelButtonText: '取消',
    //         cancelButtonAriaLabel: '取消'
    //       },
    //       startScreen: {
    //         recentSearchesTitle: '搜索历史',
    //         noRecentSearchesText: '没有搜索历史',
    //         saveRecentSearchButtonTitle: '保存到搜索历史',
    //         removeRecentSearchButtonTitle: '从搜索历史中移除',
    //         favoriteSearchesTitle: '收藏',
    //         removeFavoriteSearchButtonTitle: '从收藏中移除'
    //       },
    //       errorScreen: {
    //         titleText: '无法获取结果',
    //         helpText: '你可能需要检查你的网络连接'
    //       },
    //       footer: {
    //         selectText: '选择',
    //         navigateText: '切换',
    //         closeText: '关闭',
    //         searchByText: '搜索供应商'
    //       },
    //       noResultsScreen: {
    //         noResultsText: '无法找到相关结果',
    //         suggestedQueryText: '你可以尝试查询',
    //         reportMissingResultsText: '你认为这个查询应该有结果？',
    //         reportMissingResultsLinkText: '向我们反馈'
    //       }
    //     }
    //   },
    // },

  },

  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,mp4,webp}']
        },
        manifest: {
          name: 'VRChat 汉化文档中心',
          short_name: 'VRChat 汉化文档中心',
          description: 'VRChat 汉化文档中心',
          theme_color: '#ffffff',
          display: 'standalone',
          display_override: ['window-controls-overlay', 'standalone'],
          lang: 'zh',
          icons: [
            {
              src: '/site-icons/icons/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/site-icons/icons/android-chrome-512-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ],
          shortcuts: [
            {
              name: 'VRChat 文档枢纽',
              url: '/docs.vrchat.com/',
              description: '您可以找到全面的指南和文档，帮助您尽快开始玩 VRChat，如果遇到困难，还可以获得支持。'
            },
            {
              name: 'VRChat 创作者文档',
              url: '/creators.vrchat.com/',
              description: '利用我们的工具和文档来学习，创作，分享。'
            }
          ]
        }
      })
    ]
  }

});

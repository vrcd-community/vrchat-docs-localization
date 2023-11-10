import { defineConfig } from 'vitepress'
import { vrcahtDocsSidebars, vrchatCreatorsDocsSidebar, vccDocsSidebar, udonSharpDocsSidebar } from './sidebars'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'VRChat 汉化文档中心',
  description: 'Vite & Vue powered static site generator.',

  cleanUrls: true,

  themeConfig: {
    logo: { light: '/site-icons/vrcd-locailzation-docs-light.png', dark: '/site-icons/vrcd-locailzation-docs-dark.png', width: 24, height: 24 },

    siteTitle: 'VRChat 汉化文档中心',

    editLink: {
      pattern: 'https://github.com/vrcd-community/docs/edit/main/docs/:path',
      text: '为此页提供修改建议',
    },

    nav: [
      { text: 'VRChat 文档枢纽', link: '/docs.vrchat.com/' },
      {
        text: 'VRChat 创作者文档',
        items: [
          {
            text: 'VRChat 创作者文档',
            items: [
              { text: '主页', link: '/creators.vrchat.com/index.md' },
              { text: '世界', link: '/creators.vrchat.com/index.md' },
              { text: '虚拟形象', link: '/creators.vrchat.com/index.md' },
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
    ],

    sidebar: {
      "/docs.vrchat.com/": vrcahtDocsSidebars(),
      "/creators.vrchat.com/": vrchatCreatorsDocsSidebar()
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

});

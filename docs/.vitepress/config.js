import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '胖罐子胖摔',
  description: '胖罐子胖摔的个人主页',
  markdown: {
    lineNumbers: true, //显示代码行数
  },
  lastUpdated: true, //以git提交的时间为更新时间
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
        'link', { rel: 'icon', href: '.vitepress/public/images/logo.png' }
    ]
  ],
  sidebarMenuLabel: true,
  themeConfig: {
    logo: '/.vitepress/public/images/logo.png',
    // 导航栏
    nav: [
      { text: '胖罐子胖摔', link: '/mine/index' },
      { text: '前端导航', link: '/navigation/index' },
      { text: '日常笔记', link: '/note/', activeMatch: '/note/' },
      { text: '胖罐子的藏宝洞', link: '/warehouse/', activeMatch:'/warehouse/' },
      { text: '和胖罐子一起玩', link: '/links/QRcode' },
      { text: '我们的小伙伴', link: '/team/index' },
      { text: 'ds音乐盒', link: '/music/index' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
    ],
    footer: {
      message: '胖罐子胖摔的个人主页',
      copyright: 'Copyright © 2019-present 胖罐子胖摔'
    },
    lastUpdatedText: 'Updated Date',
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    aside: true,
    // 右侧侧边栏
    outline: 'deep',
    outlineTitle: '本页目录',
    // 左侧侧边栏
    sidebar: {
      '/note/': [
        {
          text: 'note',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'index', link: "/note/index" },
            { text: '1', link: "/note/1" },
          ]
        }
      ],
      '/warehouse/': [
        {
          text: 'warehouse',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'index', link: "/warehouse/index" },
          ]
        }
      ],

    }
  }
})
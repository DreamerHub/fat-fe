---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '../.vitepress/public/images/logo.png',
    name: '胖罐子胖摔',
    title: '一个熟练掌握 Vue、React、Angular 等前端技术单词拼写，颜值堪比吴彦祖的的程序猿（不秃头！！！）',
    links: [
      // { icon: 'github', link: 'https://github.com/yyx990803' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      胖罐子的小伙伴
    </template>
    <template #lead>
      下面这些人，只要胖罐子最帅！！！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Article } from '@/assets/type'

export const useActivityStore = defineStore('activityStore', () => {
  const activities = ref<Article[]>([
    {
      id: 0,
      cover: 'https://wl-file.tsichuan.com/tour-cms/230817399feec4b1404422806e2d7c69b540a4.png',
      title: '2023年文化和自然遗产日四川省非遗宣传展示系列活动',
      date: '2023-06-28',
      content: '2023年6月10日是“文化和自然遗产日”。为进一步保护传承弘扬中华优秀传统文化，提高人民群众非物质文化遗产（以下简称“非遗”）保护意识，推动文化强省旅游强省建设，四川省以“加强非遗系统性保护 促进可持续发展”为主题，在 “文化和自然遗产日”前后开展非遗宣传展示系列活动，并举办第四届“四川非遗购物节”。',
    },
  ])

  return { activities }
})
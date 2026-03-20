import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Article } from '@/assets/type'

export const useNoticeStore = defineStore('noticeStore', () => {
  const total = ref(33)
  const notices = ref<Article[]>([
    {
      id: 0,
      title: '四川省非物质文化遗产保护中心 （四川省非物质文化遗产馆） 四川省非遗馆大楼西侧外墙维修项目比选结果公告',
      date: '2025-12-19',
    },
    {
      id: 1,
      title: '四川省非物质文化遗产保护中心 （四川省非物质文化遗产馆） 2025年度川渝非遗保护联盟活动项目比选结果公告',
      date: '2025-12-19',
    },
    {
      id: 2,
      title: '四川省非遗馆大楼西侧外墙维修项目 比选公告',
      date: '2025-12-16',
    },
  ])

  return { total, notices }
})
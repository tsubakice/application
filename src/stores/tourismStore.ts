import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Article } from '@/assets/type'

export const useTourismStore = defineStore('tourismStore', () => {
  const tours = ref<Article[]>([
    {
      id: 0,
      title: '竹艺体验之旅',
      cover: 'https://wl-file.tsichuan.com/tour-cms/23081701630f723922439e9a690d2c0cc85aaa.jpg',
      content: '🔵道明竹艺村、青神国际竹艺城、夹江马村乡、蜀南竹海。🔵道明竹编、青神竹编、夹江竹纸制作技艺、江安竹簧。',
    },
    {
      id: 1,
      title: '年画体验之旅',
      cover: 'https://wl-file.tsichuan.com/tour-cms/23081714cb547c07c74980ad248d098b68ada6.jpg',
      content: '🔵 依托悠久的年画民俗（绵竹、夹江）深度体验民间吉祥之旅。🔵绵竹年画村、孝泉古镇，夹江年画研究所。🔵绵竹木版年画，夹江年画。',
    },
    {
      id: 2,
      title: '蜀道三国非遗之旅',
      cover: 'https://wl-file.tsichuan.com/tour-cms/2308178a6ac9a8272449629be7c122c62f4bd0.jpg',
      content: '🔵 广汉——罗江——涪城——江油——梓潼——剑门关——昭化区——朝天区——阆中——南部——西充——南充。🔵 依托蜀道沿线非遗资源深度体验三国蜀汉文化的独特魅力。',
    },
  ])

  return { tours }
})
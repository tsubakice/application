import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Article } from '@/assets/type'

export const useHotStore = defineStore('hotStore', () => {
  const hots = ref<Article[]>([
    {
      id: 0,
      title: '喜报 | 绵阳市羌绣作品《羌》荣获四川省首届民族地区“国寿杯”妇女手工创新创意大赛创新创意羊角花金奖',
      content: '7月4日，四川省首届民族地区“国寿杯”妇女手工创新创意大赛决赛在阿坝州黑水县举行，绵阳市北川羌族自治县羌绣作品《羌》荣获创新创意羊角花金奖。（颁奖嘉宾与羌绣作品获奖人员）（《羌》获奖证书）（羌族刺绣省级非遗代表性传承人陈云珍介绍《羌》）作品《羌》简介《羌》，以羌族史诗与神话故事为蓝本，结合羌绣传统纹样，展出一幕以“木姐珠”为主角、融合了“木姐珠与斗安珠”“羌族的诞生”“木姐珠与三座雪山”“羌戈大战”等神话故事的刺绣“剧场”。',
      date: '2023-07-06',
      cover: 'https://wl-file.tsichuan.com/tour-cms/230817247b54abe2fa465c9c73dfed81adc8e3.jpg',
    },
    {
      id: 1,
      title: '四川省文化和旅游厅公示“非遗四川·百城百艺”四川非遗品牌建议名单',
      content: '为深入贯彻落实党中央国务院和四川省委省政府关于传承发展中华优秀传统文化决策部署，推动四川非遗创造性转化、创新性发展，四川省文化和旅游厅于近期组织开展了“非遗四川·百城百艺”四川非遗品牌评审工作。按照区县申报、市州推荐、专家评审、评审工作领导小组审议等程序，形成30项“非遗四川·百城百艺”四川非遗品牌建议名单。',
      date: '2023-06-28',
      cover: 'https://wl-file.tsichuan.com/tour-cms/23081700c1c076135143fe9e8d26f604b33b22.jpg',
    },
    {
      id: 2,
      title: '四川省非物质文化遗产保护中心召开创建省级研学旅行实践基地动员大会',
      content: '2023年6月26日上午，四川省非物质文化遗产保护中心召开创建省级研学旅行实践基地动员大会，省文旅厅非遗处、非遗保护中心全体干部职工，物业公司、安保公司相关负责人参会。',
      date: '2023-06-28',
      cover: 'https://wl-file.tsichuan.com/tour-cms/230817daac8a86a26847eba9ced1d1ce72081f.jpg',
    },
  ])

  return { hots }
})
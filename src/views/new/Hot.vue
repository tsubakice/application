<script setup lang="ts">
import type { Article } from '@/assets/type'
import { ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import { IconClockHour3 } from '@tabler/icons-vue'

const hots = ref<Article[]>([
  {
    id: 0,
    title: '喜报 | 绵阳市羌绣作品《羌》荣获四川省首届民族地区“国寿杯”妇女手工创新创意大赛创新创意羊角花金奖',
    content: '7月4日，四川省首届民族地区“国寿杯”妇女手工创新创意大赛决赛在阿坝州黑水县举行，绵阳市北川羌族自治县羌绣作品《羌》荣获创新创意羊角花金奖。（颁奖嘉宾与羌绣作品获奖人员）（《羌》获奖证书）（羌族刺绣省级非遗代表性传承人陈云珍介绍《羌》）作品《羌》简介《羌》，以羌族史诗与神话故事为蓝本，结合羌绣传统纹样，展出一幕以“木姐珠”为主角、融合了“木姐珠与斗安珠”“羌族的诞生”“木姐珠与三座雪山”“羌戈大战”等神话故事的刺绣“剧场”。',
    date: ' 2023-07-06',
    image: 'https://wl-file.tsichuan.com/tour-cms/230817247b54abe2fa465c9c73dfed81adc8e3.jpg',
  },
  {
    id: 1,
    title: '四川省文化和旅游厅公示“非遗四川·百城百艺”四川非遗品牌建议名单',
    content: '为深入贯彻落实党中央国务院和四川省委省政府关于传承发展中华优秀传统文化决策部署，推动四川非遗创造性转化、创新性发展，四川省文化和旅游厅于近期组织开展了“非遗四川·百城百艺”四川非遗品牌评审工作。按照区县申报、市州推荐、专家评审、评审工作领导小组审议等程序，形成30项“非遗四川·百城百艺”四川非遗品牌建议名单。',
    date: ' 2023-06-28',
    image: 'https://wl-file.tsichuan.com/tour-cms/23081700c1c076135143fe9e8d26f604b33b22.jpg',
  },
])
</script>

<template>
  <ul>
    <li v-for="hot in hots" :key="hot.id">
      <img :src="hot.image" alt="cover" class="cover">
      <div class="container">
        <el-text tag="p" truncated class="title">{{ hot.title }}</el-text>
        <el-text tag="p" :line-clamp="2" class="content">{{ hot.content }}</el-text>
        <div class="bottom">
          <div class="date">
            <AppIcon size="14px" icon-size="14px" color="var(--app-text-placeholder-color)">
              <IconClockHour3/>
            </AppIcon>
            <el-text>{{ hot.date }}</el-text>
          </div>
          <div class="more">
            <img src="@/assets/images/more-left.png" alt="left">
            <el-text>显示更多</el-text>
            <img src="@/assets/images/more-right.png" alt="right">
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  margin: 0 0 32px 0;
  padding: 16px;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  height: 200px;
  padding: 0 24px;
  background: white;
  border: 8px solid transparent;
  border-image: url("@/assets/images/item.png") 16 stretch;
  transition: box-shadow var(--app-transition-time), transform var(--app-transition-time);
  cursor: default;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: 0 0 2px var(--app-icon-color);
    transform: scale(1.025);
  }
}

.cover {
  width: 200px;
  height: 150px;
  margin-right: 26px;
}

.container {
  width: calc(100% - 226px);
}

.title {
  --el-text-font-size: 20px;
  --el-text-color: black;

  font-weight: 700;
}

.content {
  --el-text-color: var(--app-placeholder-text-color);

  margin-top: 19px;
  text-indent: 2em;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 22px;
}

.date {
  display: flex;
  align-items: center;

  > span {
    --el-text-color: var(--app-placeholder-text-color);

    padding-left: 8px;
  }
}

.more {
  display: flex;
  align-items: center;
  gap: 2px;

  > img {
    height: 18px;
  }

  > span {
    --el-text-font-size: 12px;
    --el-text-color: var(--app-color-primary);

    cursor: pointer;
  }
}
</style>
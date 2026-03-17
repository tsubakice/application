<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import { ref } from 'vue'
import type { Article } from '@/assets/type'

defineOptions({ name: 'Activity' })

const { active, tabs } = storeToRefs(useSubTabStore())

const records = ref<Article[]>([
  {
    id: 0,
    cover: 'https://wl-file.tsichuan.com/tour-cms/230817399feec4b1404422806e2d7c69b540a4.png',
    title: '2023年文化和自然遗产日四川省非遗宣传展示系列活动',
    date: '2023-06-28',
    content: '2023年6月10日是“文化和自然遗产日”。为进一步保护传承弘扬中华优秀传统文化，提高人民群众非物质文化遗产（以下简称“非遗”）保护意识，推动文化强省旅游强省建设，四川省以“加强非遗系统性保护 促进可持续发展”为主题，在 “文化和自然遗产日”前后开展非遗宣传展示系列活动，并举办第四届“四川非遗购物节”。',
  },
])
</script>

<template>
  <el-tabs v-model="active">
    <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        :name="tab.name"
        :label="tab.label"
        lazy>
      <ul>
        <li v-for="record in records" :key="record.id">
          <div class="left">
            <img :src="record.cover" alt="cover" class="cover">
          </div>
          <div class="right">
            <el-text tag="p" class="title">{{ record.title }}</el-text>
            <el-text tag="p" class="date">{{ record.date }}</el-text>
            <div class="bar"></div>
            <el-text tag="p" :line-clamp="3" class="content">{{ record.content }}</el-text>
            <div class="more">
              <img src="@/assets/images/more-left.png" alt="left">
              <el-text>显示更多</el-text>
              <img src="@/assets/images/more-right.png" alt="right">
            </div>
          </div>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  display: none;
}

ul {
  margin: 32px 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  padding: 20px 6px;
  border: 8px solid transparent;
  border-image: url("@/assets/images/item.png") 16 stretch;
  transition: box-shadow var(--app-transition-time), transform var(--app-transition-time);
  cursor: default;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
}

.left, .right {
  position: relative;
  width: 575px;
  height: 345px;
}

.cover {
  position: absolute;
  top: -50px;
  width: inherit;
  height: 395px;
  transition: transform var(--app-transition-time);

  &:hover {
    transform: scale(1.025);
  }
}

.title {
  --el-text-font-size: 20px;
  --el-text-color: var(--app-title-color);

  font-weight: 700;
}

.date {
  --el-text-font-size: 16px;
  --el-text-color: var(--app-title-color);

  margin-top: 23px;
  font-weight: 700;
}

.bar {
  width: 38px;
  height: 2px;
  margin-top: 25px;
  background: var(--app-color-primary);
}

.content {
  --el-text-color: #515151;

  margin-top: 45px;
  text-indent: 2em;
  line-height: 24px;
}

.more {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 75px;

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
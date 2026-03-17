<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import { ref } from 'vue'
import type { Article } from '@/assets/type'

defineOptions({ name: 'Tourism' })

const { active, tabs } = storeToRefs(useSubTabStore())

const records = ref<Article[]>([
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
</script>

<template>
  <el-tabs v-model="active">
    <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        :name="tab.name"
        :label="tab.label"
        lazy>
      <div class="container">
        <div v-for="record in records" :key="record.id" class="item">
          <img :src="record.cover" alt="cover" class="cover">
          <div class="title">
            <img src="@/assets/images/title-left.png" alt="title">
            <el-text>{{ record.title }}</el-text>
          </div>
          <el-text :line-clamp="2" class="content">{{ record.content }}</el-text>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  display: none;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 20px;
  margin-bottom: 32px;
}

.item {
  height: 530px;
  padding: 16px 14px;
  border-image: url("@/assets/images/item.png") 48 27 40 35 / 20px / 0 round;
  transition: box-shadow var(--app-transition-time);

  &:hover {
    box-shadow: 0 0 8px var(--app-icon-color);
  }
}

.cover {
  width: 562px;
  height: 354px;
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 24px;

  > img {
    height: 23px;
  }

  > span {
    --el-text-font-size: 20px;
    --el-text-color: var(--app-title-color);

    font-weight: 700;
  }
}

.content {
  --el-text-font-size: 16px;
  --el-text-color: var(--app-placeholder-text-color);

  margin-top: 12px;
  padding: 0 12px;
  text-align: justify;
}
</style>
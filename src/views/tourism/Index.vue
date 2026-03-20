<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import { useTourismStore } from '@/stores/tourismStore.ts'

defineOptions({ name: 'Tourism' })

const { active, tabs } = storeToRefs(useSubTabStore())
const { tours } = storeToRefs(useTourismStore())
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
        <div v-for="tour in tours" :key="tour.id" class="item">
          <img :src="tour.cover" alt="cover" class="cover">
          <div class="title">
            <img src="@/assets/images/title-left.png" alt="title">
            <el-text>{{ tour.title }}</el-text>
          </div>
          <el-text :line-clamp="2" class="content">{{ tour.content }}</el-text>
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
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 16px var(--app-icon-color);
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
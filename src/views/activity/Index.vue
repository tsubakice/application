<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import { useActivityStore } from '@/stores/activityStore.ts'

defineOptions({ name: 'Activity' })

const { active, tabs } = storeToRefs(useSubTabStore())
const { activities } = storeToRefs(useActivityStore())
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
        <li v-for="activity in activities" :key="activity.id">
          <div class="left">
            <img :src="activity.cover" alt="cover" class="cover">
          </div>
          <div class="right">
            <el-text tag="p" class="title">{{ activity.title }}</el-text>
            <el-text tag="p" class="date">{{ activity.date }}</el-text>
            <div class="bar"></div>
            <el-text tag="p" :line-clamp="3" class="content">{{ activity.content }}</el-text>
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
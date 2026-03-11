<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabsStore } from '@/pinia/stores/subTabs.ts'

defineOptions({ name: 'Ecology' })

const { active, tabs } = storeToRefs(useSubTabsStore())
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
        <li>
          <div class="title">
            <img src="@/assets/images/body/title-left.png" alt="left">
            <el-text>羌族文化生态保护区</el-text>
            <img src="@/assets/images/body/title-right.png" alt="right">
          </div>
          <div class="more">
            <img src="@/assets/images/body/more-left.png" alt="left">
            <el-text>显示更多</el-text>
            <img src="@/assets/images/body/more-right.png" alt="right">
          </div>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
:deep(.el-tabs__header) {
  display: none;
}

ul {
  margin-bottom: 32px;
  padding: 28px 20px;
  background: white;

  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 168px;
    padding: 14px 16px;
    background: url("@/assets/images/body/organization-item.png") var(--app-background-setting);
    transition: transform var(--app-transition-time);
    cursor: default;

    &:hover {
      transform: scale(1.025);
    }

    &:nth-child(n + 2) {
      margin-top: 20px;
    }

    > .title {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 0 24px 12px;

      > img {
        height: 23px;
      }

      > span {
        font-weight: 700;

        --el-text-font-size: 24px;
        --el-text-color: var(--app-title-color);
      }
    }

    > .more {
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 72px 12px 0 0;
      cursor: pointer;

      > img {
        height: 18px;
      }

      > span {
        --el-text-font-size: 12px;
        --el-text-color: var(--app-color-primary);
      }
    }
  }
}
</style>
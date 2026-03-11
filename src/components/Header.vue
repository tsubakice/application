<script setup lang="ts">
import { IconChevronsRight, IconHome, IconSearch } from '@tabler/icons-vue'
import { reactive, ref, watch } from 'vue'
import type { Tabs } from '@/assets/type'
import { useRoute, useRouter } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'

const active = ref('home')
const tabs: Tabs = reactive([
  { id: 0, name: 'home', label: '首页' },
  { id: 1, name: 'organization', label: '组织机构', image: '/src/assets/images/body/organization.jpg' },
  { id: 2, name: 'regulation', label: '组织机构', image: '/src/assets/images/body/regulation.png' },
  { id: 3, name: 'project', label: '项目名录', image: '/src/assets/images/body/project.png' },
])

const router = useRouter()
const switchToHome = () => router.push('/')
const switchTab = (tab: TabsPaneContext) => {
  if (!tab.active) {
    router.push('/' + tab.paneName)
  }
}

const route = useRoute()
watch(() => route.path, (path: string) => {
  const [, name] = path.split('/')
  active.value = name ?? 'home'
})
</script>

<template>
  <el-row class="header">
    <el-col :span="12" class="header-left">
      <img src="@/assets/images/header/logo.png" alt="logo">
    </el-col>
    <el-col :span="12" class="header-right">
      <div class="search">
        <el-icon size="var(--app-icon-size)" color="var(--app-title-color)">
          <IconSearch/>
        </el-icon>
      </div>
      <el-text>2026-03-10 星期二 农历正月廿二</el-text>
    </el-col>
  </el-row>
  <el-tabs v-model="active" @tab-click="switchTab">
    <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        :name="tab.name"
        :label="tab.label"
        lazy>
      <div v-show="tab.image">
        <div :style="{ backgroundImage: `url(${tab.image})` }" class="title">
          <h2>{{ tab.label }}</h2>
        </div>
        <div class="breadcrumb">
          <el-icon size="var(--app-icon-size)" color="var(--app-icon-color)">
            <IconHome/>
          </el-icon>
          <el-text>当前位置：</el-text>
          <el-text @click="switchToHome">首页</el-text>
          <el-icon size="var(--app-icon-size)" color="var(--app-icon-color)">
            <IconChevronsRight/>
          </el-icon>
          <el-text>{{ tab.label }}</el-text>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.header {
  width: var(--app-container-width);
  height: 88px;
  margin: var(--app-container-margin);
  padding: 0 10px;
}

.header-left {
  display: flex;
  align-items: center;

  > img {
    height: 36px;
  }
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    aspect-ratio: 1 / 1;
    border: 1px solid var(--app-title-color);
    border-radius: 50%;
    cursor: pointer;
  }

  > span {
    padding-left: 20px;
    font-weight: 800;

    --el-text-font-size: 16px;
    --el-text-color: var(--app-title-color);
  }
}

:deep(.el-tabs__header) {
  margin-bottom: 0;

  --el-tabs-header-height: 60px;
  --el-font-size-base: 16px;
  --el-text-color-primary: var(--app-text-color);
  --el-color-primary: var(--app-color-primary);

  > .el-tabs__nav-wrap {
    margin-bottom: 0;

    &::after {
      content: none;
    }

    > .el-tabs__nav-scroll {
      display: flex;
      justify-content: center;
    }
  }
}

:deep(.el-tabs__active-bar) {
  height: 3px;
}

:deep(.el-tabs__item) {
  padding: 0 32px;
  font-weight: 600;
  transition: color var(--app-transition-time), transform var(--app-transition-time);

  &:hover {
    transform: translateY(-5px) scale(1.1);
  }
}

.title {
  height: 282px;
  background-size: cover;

  > h2 {
    width: var(--app-container-width);
    margin: var(--app-container-margin);
    padding-top: 86px;
    font-size: 40px;
    line-height: 1.75;
    color: white;
  }
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 2px;
  width: var(--app-container-width);
  height: 50px;
  margin: 20px auto;

  > span {
    transition: color var(--app-transition-time);
    cursor: default;

    --el-text-color: #969696;

    &:nth-of-type(n + 2):not(:last-of-type) {
      cursor: pointer;

      --el-text-color: #00000073;

      &:hover {
        --el-text-color: var(--app-color-primary);
      }
    }

    &:last-of-type {
      --el-text-font-size: 15px;
      --el-text-color: #000000d9;
    }
  }
}
</style>
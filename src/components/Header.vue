<script setup lang="ts">
import { IconChevronsRight, IconHome, IconSearch } from '@tabler/icons-vue'
import { reactive, ref, watch } from 'vue'
import type { Tabs } from '@/assets/type'
import { useRoute, useRouter } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'
import { useSubTabsStore } from '@/pinia/stores/subTabs.ts'
import { storeToRefs } from 'pinia'

const today = ref('2026-03-11 星期三 农历正月廿三')

const active = ref('home')
const tabs: Tabs = reactive([
  { id: 10, name: 'home', label: '首页' },
  { id: 20, name: 'organization', label: '组织机构', image: '/src/assets/images/body/organization.jpg' },
  { id: 30, name: 'regulation', label: '组织机构', image: '/src/assets/images/body/regulation.png' },
  { id: 40, name: 'project', label: '项目名录', image: '/src/assets/images/body/project.png' },
  {
    id: 50,
    name: 'inheritor',
    label: '非遗传承人',
    image: '/src/assets/images/body/inheritor.png',
    children: [
      { id: 51, name: 'national', label: '国家级非遗代表性传承人' },
      { id: 52, name: 'provincial', label: '省级非遗代表性传承人' },
    ],
  },
  {
    id: 60,
    name: 'ecology',
    label: '文化生态保护区',
    image: '/src/assets/images/body/ecology.jpg',
    children: [
      { id: 61, name: 'national', label: '国家级文化生态保护区' },
      { id: 62, name: 'provincial', label: '省级文化生态保护实验区' },
    ],
  },
  {
    id: 70,
    name: 'protection',
    label: '保护传承基地',
    image: '/src/assets/images/body/protection.png',
    children: [
      { id: 71, name: 'cIBase', label: '非遗保护传承基地' },
      { id: 72, name: 'pPDBase', label: '生产性保护示范基地' },
      { id: 73, name: 'expBase', label: '非遗体验基地' },
    ],
  },
])

const router = useRouter()
const switchToHome = () => router.push('/')
const switchTab = (tab: TabsPaneContext) => {
  if (!tab.active) {
    router.push('/' + tab.paneName)
  }
}

const route = useRoute()
const subTabsStore =  useSubTabsStore()
const { active: subActive, tabs: subTabs } = storeToRefs(subTabsStore)
watch(() => route.path, (path: string) => {
  const [, name] = path.split('/')
  active.value = name ?? 'home'
  const tab = tabs.find(tab => tab.name === active.value)
  subTabsStore.initSubTabs(tab?.children ?? [])
})
</script>

<template>
  <el-row class="header">
    <el-col :span="12" class="header-left">
      <img @click="switchToHome" src="@/assets/images/header/logo.png" alt="logo">
    </el-col>
    <el-col :span="12" class="header-right">
      <div class="search">
        <el-icon size="var(--app-icon-size)" color="var(--app-title-color)">
          <IconSearch/>
        </el-icon>
      </div>
      <el-text>{{ today }}</el-text>
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
          <el-tabs v-show="subTabs.length" v-model="subActive">
            <el-tab-pane
                v-for="subTab in subTabs"
                :key="subTab.id"
                :name="subTab.name"
                :label="subTab.label"
                lazy>
            </el-tab-pane>
          </el-tabs>
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

<style src="@/assets/styles/tabs.css" scoped/>

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
    cursor: pointer;
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
  --el-tabs-header-height: 60px;
  --el-font-size-base: 16px;
  --el-text-color-primary: var(--app-text-color);
  --el-color-primary: var(--app-color-primary);

  .el-tabs__active-bar {
    height: 3px;
  }

  .el-tabs__item {
    padding: 0 32px;
    font-weight: 600;
    transition: color var(--app-transition-time), transform var(--app-transition-time);

    &:hover {
      transform: translateY(-5px) scale(1.1);
    }
  }
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  > .el-tabs {
    width: var(--app-container-width);
    margin: var(--app-container-margin);

    &:deep(.el-tabs__nav-scroll) {
      justify-content: flex-start;

      --el-font-size-base: 20px;
      --el-text-color-primary: white;
      --el-tabs-header-height: 70px;

      .el-tabs__active-bar {
        height: 5px;
      }

      .el-tabs__item {
        font-weight: 800;

        &:hover {
          transform: translateY(-5px);
        }
      }
    }
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
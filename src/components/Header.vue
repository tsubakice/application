<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { IconChevronsRight, IconHome, IconSearch } from '@tabler/icons-vue'
import useLunar from '@/hooks/useLunar.ts'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import type { Tab } from '@/assets/type'
import { useRoute, useRouter } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'
import { useSubTabStore } from '@/stores/subTabStore.ts'

const { year, month, day, week, date } = useLunar()

const active = ref('home')
const tabs = ref<Tab[]>([
  { id: 0, name: 'home', label: '首页' },
  {
    id: 10,
    name: 'new',
    label: '资讯动态',
    image: 'https://wl-file.tsichuan.com/tour-cms/2308164335cf07d5cf4e0aa80fdd82ffcd342d.jpg',
    children: [
      { id: 11, name: 'hot', label: '热点关注' },
      { id: 12, name: 'notice', label: '通知公告' },
    ],
  },
  {
    id: 20,
    name: 'activity',
    label: '品牌活动',
    image: 'https://wl-file.tsichuan.com/tour-cms/2308174764c5a9d888495da01abf8380a47bf5.png',
    children: [
      { id: 21, name: 'cNHDay', label: '文化和自然遗产日' },
      { id: 22, name: 'iCHSpring', label: '非遗过大年 文化进万家' },
      { id: 23, name: 'shoppingFes', label: '非议购物节' },
    ],
  },
  {
    id: 30,
    name: 'visual',
    label: '视听非遗',
    image: 'https://wl-file.tsichuan.com/tour-cms/230817aecb4fcb71714beb9e2d506e1128c795.png',
    children: [
      { id: 31, name: 'audio', label: '音频' },
      { id: 32, name: 'video', label: '视频' },
    ],
  },
  {
    id: 40,
    name: 'tourism',
    label: '非遗旅游',
    image: 'https://wl-file.tsichuan.com/tour-cms/230817a5a09aa8bd8643edad7665121a448640.jpg',
    children: [
      { id: 41, name: 'tourLine', label: '旅游路线' },
      { id: 42, name: 'iCHFood', label: '非遗美食' },
      { id: 43, name: 'iCHStudy', label: '非遗研学' },
    ],
  },

  {
    id: 50,
    name: 'project',
    label: '项目名录',
    image: 'https://wl-file.tsichuan.com/tour-cms/2308177e1cd70228584f29977e98e8fe212bab.png',
  },
  {
    id: 60,
    name: 'inheritor',
    label: '传承人名录',
    image: 'https://wl-file.tsichuan.com/tour-cms/230817cca5080415144592b7059f9118fc7229.png',
    children: [
      { id: 61, name: 'national', label: '国家级非遗代表性传承人' },
      { id: 62, name: 'provincial', label: '省级非遗代表性传承人' },
      { id: 63, name: 'municipal', label: '市级非遗代表性传承人' },
      { id: 64, name: 'district', label: '区级非遗代表性传承人' },
    ],
  },
  {
    id: 70,
    name: 'ecology',
    label: '文化生态保护区',
    image: 'https://wl-file.tsichuan.com/tour-cms/230817ce39544b9ce6490892535de012196095.jpg',
    children: [
      { id: 71, name: 'national', label: '国家级文化生态保护区' },
      { id: 72, name: 'provincial', label: '省级文化生态保护实验区' },
    ],
  },
  {
    id: 80,
    name: 'protection',
    label: '保护传承基地',
    image: 'https://wl-file.tsichuan.com/tour-cms/230817853f0d3b4275414cb26e9e6e07e90b7c.png',
    children: [
      { id: 81, name: 'cIBase', label: '非遗保护传承基地' },
      { id: 82, name: 'pPDBase', label: '生产性保护示范基地' },
      { id: 83, name: 'expBase', label: '非遗体验基地' },
    ],
  },
  {
    id: 90,
    name: 'organization',
    label: '组织机构',
    image: 'https://wl-file.tsichuan.com/tour-cms/230817f266730180984bf38239a49d00540b42.jpg'
  },
])

const router = useRouter()
const switchToHome = () => router.push('/')
const switchTab = (ctx: TabsPaneContext) => {
  if (!ctx.active) {
    router.push('/' + ctx.paneName)
  }
}

const route = useRoute()
const subTabStore =  useSubTabStore()
watch(() => route.path, value => {
  const [, name] = value.split('/')
  active.value = name ? name : 'home'
  const subTabs = findSubTabByName(name)
  subTabStore.initTabs(subTabs)
})

const findSubTabByName = (name: string) => {
  const tab = tabs.value.find(tab => tab.name === name)
  return tab?.children ?? []
}

const { tabs: subTabs, active: subActive } = storeToRefs(subTabStore)
const isHome = computed(() => active.value === 'home')
</script>

<template>
  <el-row class="container">
    <el-col :span="12" class="left">
      <img v-show="!isHome" src="@/assets/images/logo1.png" alt="logo">
      <img v-show="isHome" src="@/assets/images/logo3.png" alt="logo">
    </el-col>
    <el-col :span="12" class="right" :class="{ 'is-home': isHome }">
      <AppIcon size="36px" color="var(--app-title-color)" border="1px solid var(--app-title-color)">
        <IconSearch/>
      </AppIcon>
      <el-text>{{ `${year}-${month}-${day} ${week} ${date}` }}</el-text>
    </el-col>
  </el-row>
  <el-tabs v-model="active" @tab-click="switchTab" :class="{ 'is-home': isHome }">
    <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        :name="tab.name"
        :label="tab.label"
        lazy>
      <div v-show="tab.image">
        <div class="sub" :style="{ background: `url(${tab.image}) left top / cover no-repeat` }">
          <h2>{{ tab.label }}</h2>
          <el-tabs v-model="subActive" v-show="tab.children">
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
          <AppIcon color="var(--app-icon-color)">
            <IconHome/>
          </AppIcon>
          <el-text>当前位置：</el-text>
          <el-text @click="switchToHome">首页</el-text>
          <AppIcon color="var(--app-icon-color)">
            <IconChevronsRight/>
          </AppIcon>
          <el-text>{{ tab.label }}</el-text>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
@use "@/assets/styles/tabs";

.container {
  width: var(--app-container-width);
  height: 88px;
  margin: 0 auto;
  padding: 0 10px;
}

.left {
  display: flex;

  > img {
    margin: auto 0;
    height: 36px;
  }
}

.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > span {
    --el-text-font-size: 16px;
    --el-text-color: var(--app-title-color);

    padding-left: 19px;
    font-weight: 800;
    transition: color var(--app-transition-time);
  }
}

:deep(.el-tabs__item) {
  --el-tabs-header-height: 60px;
  --el-font-size-base: 16px;
  --el-text-color-primary: var(--app-tab-title-color);
  --el-color-primary: var(--app-color-primary);

  padding: 0 24px;
  font-weight: 600;
  transition: transform var(--app-transition-time), color var(--app-transition-time);

  &:hover {
    transform: translateY(-5px) scale(1.1);
  }
}

.is-home {
  --app-title-color: white;

  &:deep(.el-tabs__item) {
    --el-text-color-primary: white;
  }
}

:deep(.el-tabs__active-bar) {
  --el-color-primary: var(--app-color-primary);

  height: 3px;
}

.sub {
  height: 282px;
  padding-top: 86px;

  > h2 {
    width: var(--app-container-width);
    margin: 0 auto;
    font-size: 40px;
    font-weight: 800;
    line-height: 69px;
    color: white;
  }

  > .el-tabs {
    position: relative;
    top: 58px;
    width: var(--app-container-width);
    margin: 0 auto;

    &:deep(.el-tabs__nav-scroll) {
      justify-content: flex-start;
    }

    &:deep(.el-tabs__item) {
      --el-tabs-header-height: 69px;
      --el-font-size-base: 20px;
      --el-text-color-primary: white;

      font-weight: 800;

      &:hover {
        transform: translateY(-5px);
      }
    }

    :deep(.el-tabs__active-bar) {
      height: 5px;
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
    --el-text-color: var(--app-placeholder-text-color);

    cursor: default;

    &:nth-of-type(n + 2):not(:last-of-type) {
      cursor: pointer;
      transition: color var(--app-transition-time);

      &:hover {
        color: var(--app-color-primary);
      }
    }

    &:last-of-type {
      --el-text-font-size: 15px;
      --el-text-color: #000000d9;
    }
  }
}
</style>
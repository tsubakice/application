<script setup lang="ts">
import { IconChevronsRight, IconHome, IconSearch } from '@tabler/icons-vue'
import { reactive, ref } from 'vue'

const active = ref('home')
const tabs: Array<{ id: number, name: string, label: string, image?: string }> = reactive([
  { id: 0, name: 'home', label: '首页' },
])
</script>

<template>
  <el-row class="header">
    <el-col :span="12" class="header-left">
      <img src="/src/assets/images/header/logo.png" alt="logo">
    </el-col>
    <el-col :span="12" class="header-right">
      <div class="search">
        <el-icon size="20px" color="#828282">
          <IconSearch/>
        </el-icon>
      </div>
      <el-text>2026-03-10 星期二 农历正月廿二</el-text>
    </el-col>
  </el-row>
  <el-tabs v-model="active">
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
          <el-icon size="20px" color="#bdab85">
            <IconHome/>
          </el-icon>
          <el-text>当前位置：</el-text>
          <el-text>首页</el-text>
          <el-icon size="20px" color="#bdab85">
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
  width: var(--container-width);
  height: 88px;
  margin: var(--container-margin);
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

  --text-color: #404040;

  > .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    aspect-ratio: 1 / 1;
    border: 1px solid var(--text-color);
    border-radius: 50%;
    cursor: pointer;
  }

  > span {
    padding-left: 20px;
    font-weight: 800;

    --el-text-font-size: 16px;
    --el-text-color: var(--text-color);
  }
}

:deep(.el-tabs__header) {
  margin-bottom: 0;

  --el-tabs-header-height: 60px;
  --el-font-size-base: 16px;
  --el-text-color-primary: #262626;
  --el-color-primary: var(--color-primary);

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
}

.title {
  height: 282px;
  background-size: cover;
  background-position: left top;

  > h2 {
    width: var(--container-width);
    margin: var(--container-margin);
    padding-top: 86px;
    font-size: 40px;
    line-height: 1.75;
    color: #ffffff;
  }
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 2px;
  width: var(--container-width);
  height: 50px;
  margin: 20px auto;

  > span {
    transition: color .5s;
    cursor: default;

    --el-text-font-size: 14px;
    --el-text-color: #969696;

    &:nth-of-type(n + 2):not(:last-of-type):hover {
      cursor: pointer;

      --el-text-color: var(--color-primary);
    }

    &:last-of-type {
      --el-text-font-size: 15px;
      --el-text-color: #000000d9;
    }
  }
}
</style>
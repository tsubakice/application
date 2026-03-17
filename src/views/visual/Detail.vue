<script setup lang="ts">
import type { Media, Tab } from '@/assets/type'
import { ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import { IconSearch, IconClockHour3 } from '@tabler/icons-vue'

const { tabs } = defineProps<{
  tabs: Tab[],
  medias: Media[],
}>()
const active = ref(tabs[0].name)

const keyword = ref('')
</script>

<template>
  <el-tabs v-model="active">
    <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        :name="tab.name"
        :label="tab.label"
        lazy>
      <el-form>
        <el-form-item>
          <el-input
              v-model="keyword"
              placeholder="请输入音视频名称"
              clearable
              #prefix>
            <AppIcon color="var(--app-icon-color)">
              <IconSearch/>
            </AppIcon>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button>搜索</el-button>
        </el-form-item>
      </el-form>
      <div class="container">
        <div v-for="media in medias" :key="media.id" class="item">
          <img :src="media.cover" alt="cover" class="cover">
          <img src="@/assets/images/play.png" alt="play" class="play">
          <h3 class="title">{{ media.title }}</h3>
          <div class="date">
            <AppIcon size="16px" icon-size="16px" color="var(--app-placeholder-text-color)">
              <IconClockHour3/>
            </AppIcon>
            <el-text>{{ media.date }}</el-text>
          </div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
@use "@/assets/styles/inner-tabs";

.el-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 80px;
  margin: 32px auto;
  background: #bfbfbf1a;
}

.el-form-item {
  margin-bottom: 0;
}

.el-input {
  --el-input-width: 405px;
  --el-input-height: 40px;
  --el-input-border-radius: 0;
  --el-input-border-color: transparent;
  --el-input-hover-border-color: transparent;
  --el-input-focus-border-color: transparent;

  &:deep(.el-input__wrapper) {
    border: 1px solid var(--app-icon-color);
  }
}

.el-button {
  --el-button-font-weight: 400;
  --el-button-bg-color: var(--app-color-primary);
  --el-button-text-color: white;
  --el-button-border-color: transparent;
  --el-button-hover-text-color: white;
  --el-button-hover-bg-color: var(--app-color-primary);
  --el-button-hover-border-color: transparent;
  --el-button-active-border-color: transparent;

  width: 80px;
  height: 40px;
  font-size: 16px;
  border-radius: 0;
  border: none;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 390px);
  gap: 15px;
  margin-bottom: 32px;
}

.item {
  position: relative;
  height: 330px;
  padding: 12px 8px;
  font-size: 0;
  border: 8px solid transparent;
  border-image: url("@/assets/images/item.png") 16 stretch;
  cursor: pointer;
  transition: box-shadow var(--app-transition-time);

  &:hover {
    box-shadow: 0 0 8px var(--app-icon-color);

    > .cover {
      transform: scale(1.025);
    }
  }
}

.cover {
  width: 358px;
  transition: transform var(--app-transition-time);
}

.play {
  position: absolute;
  top: 173px;
  right: 26px;
  width: 36px;
  aspect-ratio: 1 / 1;
}

.title {
  margin: 0;
  padding-top: 16px;
  font-size: 20px;
  font-weight: 700;
  color: var(--app-title-color);
}

.date {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;

  > span {
    --el-text-font-size: 16px;
    --el-text-color: var(--app-placeholder-text-color);
  }
}
</style>
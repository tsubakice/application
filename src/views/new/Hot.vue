<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { IconClockHour3 } from '@tabler/icons-vue'
import { storeToRefs } from 'pinia'
import { useHotStore } from '@/stores/hotStore.ts'

const { hots } = storeToRefs(useHotStore())
</script>

<template>
  <ul>
    <li v-for="hot in hots" :key="hot.id">
      <img :src="hot.cover" alt="cover" class="cover">
      <div class="container">
        <el-text tag="p" truncated class="title">{{ hot.title }}</el-text>
        <el-text tag="p" :line-clamp="2" class="content">{{ hot.content }}</el-text>
        <div class="bottom">
          <div class="date">
            <AppIcon size="14px" icon-size="14px" color="var(--app-text-placeholder-color)">
              <IconClockHour3/>
            </AppIcon>
            <el-text>{{ hot.date }}</el-text>
          </div>
          <div class="more">
            <img src="@/assets/images/more-left.png" alt="left">
            <el-text>显示更多</el-text>
            <img src="@/assets/images/more-right.png" alt="right">
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  margin: 0 0 32px 0;
  padding: 16px;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  height: 200px;
  padding: 0 24px;
  background: white;
  border: 8px solid transparent;
  border-image: url("@/assets/images/item.png") 16 stretch;
  transition: box-shadow var(--app-transition-time), transform var(--app-transition-time);
  cursor: default;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: 0 0 2px var(--app-icon-color);
    transform: scale(1.025);
  }
}

.cover {
  width: 200px;
  height: 150px;
  margin-right: 26px;
}

.container {
  width: calc(100% - 226px);
}

.title {
  --el-text-font-size: 20px;
  --el-text-color: black;

  font-weight: 700;
}

.content {
  --el-text-color: var(--app-placeholder-text-color);

  margin-top: 19px;
  text-indent: 2em;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 22px;
}

.date {
  display: flex;
  align-items: center;

  > span {
    --el-text-color: var(--app-placeholder-text-color);

    padding-left: 8px;
  }
}

.more {
  display: flex;
  align-items: center;
  gap: 2px;

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
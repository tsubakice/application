<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'

defineOptions({ name: 'Ecology' })

const { active, tabs } = storeToRefs(useSubTabStore())
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
            <img src="@/assets/images/title-left.png" alt="title">
            <h3>羌族文化生态保护区</h3>
            <img src="@/assets/images/title-right.png" alt="title">
          </div>
          <div class="more">
            <img src="@/assets/images/more-left.png" alt="more">
            <el-text>显示更多</el-text>
            <img src="@/assets/images/more-right.png" alt="more">
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
  margin: 0 0 32px 0;
  padding: 28px 20px;
  list-style: none;
  background: white;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 168px;
  padding: 14px 16px;
  background: url("@/assets/images/item.png") center / 100% 100% no-repeat;
  transition: box-shadow  var(--app-transition-time), transform var(--app-transition-time);

  &:hover {
    box-shadow: 0 0 4px var(--app-icon-color);
    transform: scale(1.025);
  }
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 0 25px 12px;

  > img {
    height: 23px;
  }

  > h3 {
    margin: 0;
    font-size: 24px;
    color: var(--app-title-color);
  }
}

.more {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 75px 12px 0 0;

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
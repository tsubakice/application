<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import Hot from '@/views/new/Hot.vue'
import Notice from '@/views/new/Notice.vue'

defineOptions({ name: 'New' })

const { active, tabs } = storeToRefs(useSubTabStore())
</script>

<template>
  <el-tabs v-model="active">
    <el-tab-pane :name="tabs[0].name" :label="tabs[0].label" lazy>
      <Hot/>
    </el-tab-pane>
    <el-tab-pane :name="tabs[1].name" :label="tabs[1].label" lazy>
      <Notice/>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  display: none;
}
</style>
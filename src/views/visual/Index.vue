<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import Audio from '@/views/visual/Audio.vue'
import Video from '@/views/visual/Video.vue'

defineOptions({ name: 'Visual' })

const { active, tabs } = storeToRefs(useSubTabStore())
</script>

<template>
  <el-tabs v-model="active">
    <el-tab-pane :name="tabs[0].name" :label="tabs[0].label" lazy>
      <Audio/>
    </el-tab-pane>
    <el-tab-pane :name="tabs[1].name" :label="tabs[1].label" lazy>
      <Video/>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  display: none;
}
</style>
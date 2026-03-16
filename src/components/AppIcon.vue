<script setup lang="ts">
const { size = '20px', iconSize = '20px', color = 'black', border = 'none' } = defineProps<{
  size?: string,
  iconSize?: string,
  color?: string,
  border? :string,
}>()
</script>

<template>
  <el-icon :size="iconSize" :color="color" :style="{ width: size, height: size, border, borderRadius: '50%' }">
    <slot></slot>
  </el-icon>
</template>

<style scoped lang="scss">

</style>
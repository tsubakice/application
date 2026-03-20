<script setup lang="ts">
import { ref } from 'vue'

const { label = '显示更多', color = 'var(--app-color-primary)', image = '' } = defineProps<{
  label?: string,
  color?: string,
  image?: string,
}>()

const emits = defineEmits<{
  click: [],
}>()

const left = ref(`/src/assets/images/more-left${image}.png`)
const right = ref(`/src/assets/images/more-right${image}.png`)

const style = ref({
  '--el-text-color': color,
})
</script>

<template>
  <div class="more">
    <img :src="left" alt="more">
    <el-text :style @click="emits('click')">{{ label }}</el-text>
    <img :src="right" alt="more">
  </div>
</template>

<style scoped lang="scss">
.more {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  > img {
    height: 18px;
  }

  > span {
    --el-text-font-size: 12px;
  }
}
</style>
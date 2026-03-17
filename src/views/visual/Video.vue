<script setup lang="ts">
import { ref } from 'vue'
import type { Media, Tab } from '@/assets/type'
import Detail from '@/views/visual/Detail.vue'

const tabs = ref<Tab[]>([
  { id: 0, name: 'video', label: '云游四川 · 非遗影像展' },
  { id: 1, name: 'record', label: '非遗 100' },
])

const videos = ref<Media[]>([
  {
    id: 0,
    title: '云游四川 · 影像展 《彝族服饰》',
    date: '2023-07-05',
    cover: 'https://wl-file.tsichuan.com/tour-cms/230904c77a5bb16ccb4f4faf20b603f1a51d89.jpg',
  },
  {
    id: 1,
    title: '云游四川 · 影像展 《峨眉武术》',
    date: '2023-07-05',
    cover: 'https://wl-file.tsichuan.com/tour-cms/230904e386795ad1e24fcab89723e1dd35f218.jpg',
  },
])
</script>

<template>
  <Detail :tabs :medias="videos"/>
</template>

<style scoped lang="scss">
@use "@/assets/styles/tabs";
</style>
<script setup lang="ts">
import { ref } from 'vue'
import type { Media, Tab } from '@/assets/type'
import Detail from '@/views/visual/Detail.vue'

const tabs = ref<Tab[]>([
  { id: 0, name: 'music', label: '传统音乐' },
  { id: 1, name: 'song', label: '传统曲艺' },
])

const musics = ref<Media[]>([
  {
    id: 0,
    title: '西岭山歌《红嘴鹦哥绿翅排》',
    date: '2023-06-28',
    cover: 'https://wl-file.tsichuan.com/tour-cms/2308177333c8bbc8a64907be60bbae10d96ec8.jpg',
  },
  {
    id: 1,
    title: '美姑民歌《年歌》',
    date: '2023-06-28',
    cover: 'https://wl-file.tsichuan.com/tour-cms/2308177333c8bbc8a64907be60bbae10d96ec8.jpg',
  },
  {
    id: 2,
    title: '西岭山歌《太阳落山要滚岩》',
    date: '2023-06-28',
    cover: 'https://wl-file.tsichuan.com/tour-cms/2308177333c8bbc8a64907be60bbae10d96ec8.jpg',
  },
  {
    id: 3,
    title: '川西北山歌《吉祥酒歌》',
    date: '2023-06-28',
    cover: 'https://wl-file.tsichuan.com/tour-cms/2308177333c8bbc8a64907be60bbae10d96ec8.jpg',
  },
])
</script>

<template>
  <Detail :tabs :medias="musics"/>
</template>

<style scoped lang="scss">
@use "@/assets/styles/tabs";
</style>
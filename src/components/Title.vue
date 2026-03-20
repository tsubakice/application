<script setup lang="ts">
const { color = 'black' } = defineProps<{
  title: string,
  color?: string,
}>()
</script>

<template>
  <div class="title">
    <img src="@/assets/images/title-left2.png" alt="title">
    <h2 :style="{ color }">{{ title }}</h2>
    <img src="@/assets/images/title-right2.png" alt="title">
  </div>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > img {
    height: 23px;
  }

  > h2 {
    margin: 0;
    font-size: 48px;
    font-weight: 800;
    line-height: 70px;
    color: black;
  }
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import New from '@/views/home/New.vue'
import Activity from '@/views/home/Activity.vue'
import Tourism from '@/views/home/Tourism.vue'

defineOptions({ name: 'Home' })

interface Carousel {
  id: number,
  cover: string,
}

const carousels = ref<Carousel[]>([
  { id: 0, cover: 'https://wl-file.tsichuan.com/tour-cms/230816c37981f7269e45e29275510102d77eb5.jpg' },
  { id: 1, cover: 'https://wl-file.tsichuan.com/tour-cms/230817083fe9415cf745faa973105ff68732dd.jpg' },
  { id: 2, cover: 'https://wl-file.tsichuan.com/tour-cms/230817f9d159a1a5694eec85c6a5621068e7d6.png' },
  { id: 3, cover: 'https://wl-file.tsichuan.com/tour-cms/2308173adab8ee45524a748602522381c149af.jpg' },
])
</script>

<template>
  <el-carousel arrow="never">
    <el-carousel-item v-for="carousel in carousels" :key="carousel.id">
      <img :src="carousel.cover" alt="carousel">
    </el-carousel-item>
  </el-carousel>
  <New/>
  <Activity/>
  <Tourism/>
</template>

<style scoped lang="scss">
:deep(.el-carousel__container) {
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
  }
}

:deep(.el-carousel__indicator) {
  --el-carousel-indicator-padding-vertical: 0;
  --el-carousel-indicator-padding-horizontal: 0;

  > button {
    margin: 0 4px 24px;
    width: 33px;
    height: 21px;
    background: url("@/assets/images/indicator.png") center / 100% 100% no-repeat;
  }
}
</style>
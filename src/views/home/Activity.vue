<script setup lang="ts">
import Title from '@/components/Title.vue'
import More from '@/components/More.vue'
import { storeToRefs } from 'pinia'
import { useActivityStore } from '@/stores/activityStore.ts'

const { activities } = storeToRefs(useActivityStore())
</script>

<template>
  <div class="container">
    <Title title="品牌活动" color="white"/>
    <More label="更多" color="white" image="2" style="margin-top: 36px"/>
    <el-carousel>
      <el-carousel-item v-for="activity in activities" :key="activity.id">
        <div class="activity"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  height: 956px;
  margin: 71px 0 228px;
  padding-top: 34px;
  background: url("@/assets/images/background2.png") center / 100% 100% no-repeat;
}

.el-carousel {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 810px;
}

:deep(div.el-carousel__container) {
  height: 810px;
}

.activity {
  width: 1083px;
  height: inherit;
  margin: 0 auto;
  background: url("@/assets/images/background3.png") center / 100% 100% no-repeat;
}
</style>
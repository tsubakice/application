<script setup lang="ts">
import Title from '@/components/Title.vue'
import { ref } from 'vue'
import type { Tab } from '@/assets/type'
import { storeToRefs } from 'pinia'
import { useTourismStore } from '@/stores/tourismStore.ts'
import More from '@/components/More.vue'

const active = ref('tourLine')
const tabs = ref<Tab[]>([
  { id: 0, name: 'tourLine', label: '旅游路线' },
  { id: 1, name: 'iCHFood', label: '非遗美食' },
  { id: 2, name: 'iCHStudy', label: '非遗研学' },
])

const { tours } = storeToRefs(useTourismStore())
</script>

<template>
  <div class="container">
    <Title title="非遗旅游"/>
    <el-tabs v-model="active">
      <el-tab-pane
          v-for="tab in tabs"
          :key="tab.id"
          :name="tab.name"
          :label="tab.label"
          lazy>
        <el-carousel :autoplay="false" type="card">
          <el-carousel-item v-for="tour in tours" :key="tour.id">
            <img :src="tour.cover" alt="cover">
            <div class="content">
              <h3>{{ tour.title }}</h3>
              <el-text tag="p">{{ tour.content }}</el-text>
              <More/>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/tabs";
@use "@/assets/styles/inner-tabs2";

.container {
  margin-top: 63px;
  background: url("@/assets/images/background4.png") center / 100% 100% no-repeat;
}

:deep(div.el-carousel__container) {
  margin-top: 36px;

  > .is-in-stage:not(.is-active) > .content {
    display: none;
  }

  .content {
    text-align: center;

    > h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      color: var(--app-title-color);
    }

    > p {
      width: 600px;
      margin: 0 auto;
    }
  }

  img {
    width: 810px;
    height: 464px;
  }
}
</style>
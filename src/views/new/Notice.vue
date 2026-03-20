<script setup lang="ts">
import Pagination from '@/components/Pagination.vue'
import { storeToRefs } from 'pinia'
import { useNoticeStore } from '@/stores/noticeStore.ts'

const { total, notices } = storeToRefs(useNoticeStore())

const requestNewRecord = (page: number, pageSize: number) => {
  console.log(page, pageSize)
}
</script>

<template>
  <ul>
    <li v-for="notice in notices" :key="notice.id">
      <el-text class="title">{{ notice.title }}</el-text>
      <el-text class="date">{{ notice.date }}</el-text>
    </li>
  </ul>
  <Pagination :total @request-new-record="requestNewRecord"/>
</template>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px dashed var(--app-icon-color);
  cursor: pointer;

  &:hover > .title {
    --el-text-color: var(--app-color-primary);
  }
}

.title {
  --el-text-font-size: 16px;
  --el-text-color: black;

  transition: color var(--app-transition-time);

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    aspect-ratio: 1 / 1;
    margin: 0 8px 0 3px;
    background: var(--app-color-primary);
    transform: translateY(-2px) rotate(45deg);
  }
}

.date {
  --el-text-font-size: 16px;
  --el-text-color: var(--app-placeholder-text-color);

  padding-right: 24px;
}
</style>
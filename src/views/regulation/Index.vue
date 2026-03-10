<script setup lang="ts">
import type { Articles } from '@/assets/type'
import { reactive } from 'vue'

defineOptions({ name: 'Regulation' })

const articles: Articles = reactive([
  { id: 0, title: '四川省文化和旅游厅 四川省人力资源和社会保障厅 四川省乡村振兴局发布《四川省非遗工坊管理办法》（川文旅办发〔2022〕63号）', date: '2022-05-19' },
  { id: 1, title: '四川省文化和旅游厅等12部门印发《关于进一步加强非物质文化遗产保护工作的实施意见》（川文旅发〔2022〕25号）', date: '2022-04-28' },
  { id: 2, title: '中共中央办公厅 国务院办公厅印发《关于进一步加强非物质文化遗产保护工作的意见》（2021）', date: '2021-08-12' },
  { id: 3, title: '中华人民共和国非物质文化遗产法（中华人民共和国主席令第四十二号）', date: '2011-02-25' },
])
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="article in articles" :key="article.id">
        <el-text class="title">{{ article.title }}</el-text>
        <el-text class="date">{{ article.date }}</el-text>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  margin-bottom: 32px;
  padding: 28px 30px;
  background: #ffffff;

  --border-color: #bdab85;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 68px;
    bottom: 68px;
    width: 18px;
    border: 2px solid var(--border-color);
  }

  &::before {
    left: 12px;
    border-right: none;
  }

  &::after {
    right: 12px;
    border-left: none;
  }
}

ul > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 80px;
  border: 1px solid var(--border-color);
  transition: transform .5s;
  cursor: pointer;

  --el-font-size-base: 16px;

  &:nth-child(n + 2) {
    margin-top: 16px;
  }

  &:hover {
    transform: rotateX(360deg);

    > .title {
      --el-text-color: var(--color-primary);
    }
  }

  > .title {
    transition: color .5s;

    --el-text-color: #000000;
  }

  > .date {
    --el-text-color: #8c8c8c;
  }
}
</style>
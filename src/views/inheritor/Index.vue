<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import { ref } from 'vue'
import { types, batches, regions } from '@/assets/data'
import AppIcon from '@/components/AppIcon.vue'
import { IconSearch } from '@tabler/icons-vue'
import type { Inheritor } from '@/assets/type'
import Pagination from '@/components/Pagination.vue'

defineOptions({ name: 'Inheritor' })

const { active, tabs } = storeToRefs(useSubTabStore())

const form = ref({
  region: '',
  type: '',
  batch: '',
  keyword: '',
})

const total = ref(23)
const inheritors = ref<Inheritor[]>([
  {
    id: 0,
    name: '郎加木',
    gender: '男',
    ethic: '羌族',
    type: '传统音乐',
    project: '多声部民歌（羌族多声部民歌）',
    address: '四川省',
  },
  {
    id: 1,
    name: '龚代仁',
    gender: '男',
    ethic: '羌族',
    type: '传统音乐',
    project: '羌笛演奏及制作技艺',
    address: '四川省',
  },
  {
    id: 2,
    name: '降巴其扎',
    gender: '男',
    ethic: '藏族',
    type: '传统音乐',
    project: '多藏族民歌（川西藏族山歌）',
    address: '四川省',
  },
])
</script>

<template>
  <el-tabs v-model="active">
    <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        :name="tab.name"
        :label="tab.label"
        lazy>
      <el-form>
        <el-form-item>
          <el-cascader
              v-model="form.region"
              :props="{ expandTrigger: 'hover', value: 'id' }"
              :options="regions"
              placeholder="选择申报地区"
              clearable/>
        </el-form-item>
        <el-form-item>
          <el-select
              v-model="form.type"
              :props="{ value: 'id' }"
              :options="types"
              placeholder="选择传承人类别"
              clearable/>
        </el-form-item>
        <el-form-item>
          <el-select
              v-model="form.batch"
              :props="{ value: 'id' }"
              :options="batches"
              placeholder="选择传承人批次"
              clearable/>
        </el-form-item>
        <el-form-item>
          <el-input
              v-model="form.keyword"
              placeholder="搜索关键字"
              clearable
              #prefix>
            <AppIcon color="var(--app-icon-color)">
              <IconSearch/>
            </AppIcon>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button>搜索</el-button>
        </el-form-item>
      </el-form>
      <div class="container">
        <el-table :data="inheritors">
          <el-table-column type="index" label="序号" width="80px"/>
          <el-table-column prop="name" label="姓名" width="225px"/>
          <el-table-column prop="gender" label="性别" width="100px"/>
          <el-table-column prop="ethic" label="民族" width="120px"/>
          <el-table-column prop="type" label="类别" show-overflow-tooltip width="225px"/>
          <el-table-column prop="project" label="项目名称" show-overflow-tooltip width="230px"/>
          <el-table-column prop="address" label="申报地区或单位" width="200px"/>
        </el-table>
        <Pagination :total/>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
@use "@/assets/styles/form";
@use "@/assets/styles/table";

:deep(.el-tabs__header) {
  display: none;
}

.el-form-item {
  --form-item-width: 235px;
}

.el-input {
  --el-input-width: 335px;
}

.container {
  padding: 25px 10px;
  margin-bottom: 32px;
  background: white;
}
</style>
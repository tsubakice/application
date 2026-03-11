<script setup lang="ts">
import { useSubTabsStore } from '@/pinia/stores/subTabs.ts'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import type { Batches, Inheritors, Regions, Types } from '@/assets/type'
import types from '@/assets/share/types.json'
import batches from '@/assets/share/batches.json'
import regions from '@/assets/share/regions.json'
import { IconSearch } from '@tabler/icons-vue'

defineOptions({ name: 'Inheritor' })

const { active, tabs } = storeToRefs(useSubTabsStore())
const form = reactive({
  region: '',
  type: '',
  batch: '',
  keyword: '',
})

const inheritorTypes: Types = reactive(types)
const inheritorBatches: Batches = reactive(batches)
const inheritorRegions: Regions = reactive(regions)
const inheritors: Inheritors = reactive([
  {
    id: 0,
    name: '降巴其扎',
    gender: '男',
    ethnic: '藏族',
    type: '传统音乐',
    project: '藏族民歌（川西藏族山歌）',
    address: '甘孜藏族自治州',
  },
  {
    id: 1,
    name: '龚代仁',
    gender: '男',
    ethnic: '羌族',
    type: '传统音乐',
    project: '羌笛演奏及制作技艺',
    address: '阿坝藏族羌族自治州',
  },
])

const page = ref(1)
const changePage = (value: number) => page.value = value
</script>

<template>
<el-tabs v-model="active">
  <el-tab-pane
      v-for="tab in tabs"
      :key="tab.id"
      :name="tab.name"
      :label="tab.label"
      lazy>
    <el-form :model="form">
      <el-form-item>
        <el-cascader
            v-model="form.region"
            :props="{ expandTrigger: 'hover' as const, value: 'id' }"
            :options="inheritorRegions"
            placeholder="选择申报地区"
            clearable/>
      </el-form-item>
      <el-form-item>
        <el-select
            v-model="form.type"
            :props="{ value: 'id' }"
            :options="inheritorTypes"
            placeholder="选择传承人类别"
            clearable/>
      </el-form-item>
      <el-form-item>
        <el-select
            v-model="form.batch"
            :props="{ value: 'id' }"
            :options="inheritorBatches"
            placeholder="选择传承人批次"
            clearable/>
      </el-form-item>
      <el-form-item>
        <el-input
            v-model="form.keyword"
            placeholder="搜索关键字"
            clearable
            #prefix>
          <el-icon size="var(--app-icon-size)" color="var(--app-icon-color)">
            <IconSearch/>
          </el-icon>
        </el-input>
      </el-form-item>
      <el-form-item>
        <button type="button">搜索</button>
      </el-form-item>
    </el-form>
    <div class="container">
      <el-table :data="inheritors">
        <el-table-column type="index" label="序号" width="80px"/>
        <el-table-column prop="name" label="姓名" width="225px"/>
        <el-table-column prop="gender" label="性别" width="100px"/>
        <el-table-column prop="ethnic" label="民族" width="120px"/>
        <el-table-column prop="type" label="类别" width="225px"/>
        <el-table-column prop="project" label="项目名称" width="230px"/>
        <el-table-column prop="address" label="申报地区或单位" width="200px"/>
      </el-table>
      <el-pagination
          layout="prev, pager, next, jumper, slot"
          :page-count="11"
          v-model:current-page="page"
          @update:current-page="changePage">
        页/共 {{ inheritors.length }} 条
      </el-pagination>
    </div>
  </el-tab-pane>
</el-tabs>
</template>

<style src="@/assets/styles/table.css" scoped/>
<style src="@/assets/styles/form.css" scoped/>

<style scoped>
:deep(.el-tabs__header) {
  display: none;
}

.el-form > .el-form-item {
  --form-item-width: 235px;

  &:deep(.el-cascader) > .el-input {
    --el-input-width: var(--form-item-width);
    --el-input-height: var(--form-item-height);
    --el-input-border-color: var(--form-item-color);
    --el-input-hover-border-color: var(--form-item-color);
    --el-input-focus-border-color: var(--form-item-color);
  }

  .el-input {
    --el-input-width: 335px;
  }
}
</style>
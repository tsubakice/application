<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabsStore } from '@/pinia/stores/subTabs.ts'
import { reactive } from 'vue'
import { IconSearch } from '@tabler/icons-vue'
import type { Bases } from '@/assets/type'
import usePage from '@/hooks/usePage.ts'

defineOptions({ name: 'protection' })

const { active, tabs } = storeToRefs(useSubTabsStore())
const form = reactive({
  keyword: '',
})

const bases: Bases = reactive([
  { id: 0, name: '德格宗萨藏医药有限公司', address: '四川省甘孜藏族自治州德格县' },
  { id: 1, name: '安岳县文化馆', address: '四川省资阳市安岳县' },
  { id: 2, name: '雅安茶厂股份有限公司', address: '四川省雅安市雨城区大兴镇' },
])

const { page, changePage } = usePage()
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
        <el-table :data="bases">
          <el-table-column type="index" label="序号" width="80px"/>
          <el-table-column prop="name" label="基地名称" width="550px"/>
          <el-table-column prop="address" label="基地所在地" width="550px"/>
        </el-table>
        <el-pagination
            layout="prev, pager, next, jumper, slot"
            :page-count="18"
            hide-on-single-page
            v-model:current-page="page"
            @update:current-page="changePage">
          页/共 {{ bases.length }} 条
        </el-pagination>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style src="@/assets/styles/form.css" scoped/>
<style src="@/assets/styles/table.css" scoped/>

<style scoped>
:deep(.el-tabs__header) {
  display: none;
}

.el-form {
  justify-content: center;
  gap: 6px;

  > .el-form-item {
    --form-item-width: 406px;
  }
}
</style>
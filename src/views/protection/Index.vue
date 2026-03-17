<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabStore } from '@/stores/subTabStore.ts'
import AppIcon from '@/components/AppIcon.vue'
import { IconSearch } from '@tabler/icons-vue'
import { ref } from 'vue'
import type { Base } from '@/assets/type'
import Pagination from '@/components/Pagination.vue'

defineOptions({ name: 'Protection' })

const { active, tabs } = storeToRefs(useSubTabStore())

const base = ref('')

const total = ref(230)
const bases = ref<Base[]>([
  { id: 0, name: '凉山西昌贾佳彝族服饰体验基地', address: '西昌市月海路1段78贾佳彝族传统服饰生产性保护示范基地号' },
  { id: 1, name: '凉山盐源泸沽湖摩梭民俗体验基地', address: '泸沽湖传习所、文化广场' },
  { id: 2, name: '凉山会理绿陶体验基地', address: '凉山州会理县城北街道毛溪村3组' },
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
          <el-input
              v-model="base"
              placeholder="请输入基地名称"
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
        <el-table :data="bases">
          <el-table-column type="index" label="序号" width="80px"/>
          <el-table-column prop="name" label="基地名称" width="550px"/>
          <el-table-column prop="address" label="基地所在地" width="550px"/>
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

.el-form {
  margin-top: 0;
}

.el-form-item {
  --form-item-width: 406px;
}

.container {
  padding: 25px 10px;
  margin-bottom: 32px;
  background: white;
}
</style>
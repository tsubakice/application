<script setup lang="ts">
import { ref } from 'vue'
import type { Project, Tab } from '@/assets/type'
import { types, batches } from '@/assets/data'
import AppIcon from '@/components/AppIcon.vue'
import { IconSearch } from '@tabler/icons-vue'
import Pagination from '@/components/Pagination.vue'

defineOptions({ name: 'Project' })

const active = ref('national')
const tabs = ref<Tab[]>([
  { id: 51, name: 'national', label: '国家级项目' },
  { id: 52, name: 'provincial', label: '省级项目' },
  { id: 53, name: 'municipal', label: '市级项目' },
  { id: 54, name: 'district', label: '区级项目' },
])

const form = ref({
  type: '',
  batch: '',
  keyword: '',
})

const total = ref(23)
const projects = ref<Project[]>([
  {
    id: 0,
    label: 'Ⅰ-141',
    name: '毕阿史拉则传说',
    type: '民间文学',
    batch: '2014 第四批',
    unit: '金阳县文化馆',
    address: '凉山彝族自治州金阳县',
  },
  {
    id: 1,
    label: 'Ⅰ-152',
    name: '玛牧',
    type: '民间文学',
    batch: '2014 第四批',
    unit: '喜德县文化馆',
    address: '凉山彝族自治州喜德县',
  },
  {
    id: 2,
    label: 'Ⅰ-91',
    name: '禹的传说',
    type: '民间文学',
    batch: '2011 第四批',
    unit: '汶川县文化馆',
    address: '阿坝藏族羌族自治州汶川县',
  },
])
</script>

<template>
  <div class="title">
    <img src="@/assets/images/title-left.png" alt="title">
    <h3>四川省非物质文化遗产代表性项目名录</h3>
    <img src="@/assets/images/title-right.png" alt="title">
  </div>
  <div class="introduce">
    <el-text tag="p">
      建立非物质文化遗产代表性项目名录，对保护对象予以确认，以便集中有限资源，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产项目进行重点保护，是非物质文化遗产保护的重要基础性工作之一。联合国教科文组织《保护非物质文化遗产公约》（以下简称《公约》）要求“各缔约国应根据自己的国情”拟订非物质文化遗产清单。建立国家级非物质文化遗产名录，是我国履行《公约》缔约国义务的必要举措。《中华人民共和国非物质文化遗产法》明确规定：“国家对非物质文化遗产采取认定、记录、建档等措施予以保存，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产采取传承、传播等措施予以保护。”“国务院建立国家级非物质文化遗产代表性项目名录，将体现中华民族优秀传统文化，具有重大历史、文学、艺术、科学价值的非物质文化遗产项目列入名录予以保护。”
    </el-text>
    <el-text tag="p">
      巴蜀文化源远流长，巴蜀儿女用勤劳和智慧创造了丰富多彩的非物质文化遗产。我省现有联合国教科文组织人类非遗代表作名录9项、国家非遗代表性项目153项，拥有省级项目1241项、市级 4579项、县级 10904项。
    </el-text>
  </div>
  <el-tabs v-model="active">
    <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        :name="tab.name"
        :label="tab.label"
        lazy>
      <el-form :model="form">
        <el-form-item>
          <el-select
              v-model="form.type"
              :props="{ value: 'id' }"
              :options="types"
              placeholder="选择项目类别"
              clearable/>
        </el-form-item>
        <el-form-item>
          <el-select
              v-model="form.batch"
              :props="{ value: 'id' }"
              :options="batches"
              placeholder="选择项目批次"
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
    </el-tab-pane>
  </el-tabs>
  <div class="container">
    <el-table :data="projects">
      <el-table-column type="index" label="序号" width="100px"/>
      <el-table-column prop="label" label="项目编号" width="120px"/>
      <el-table-column prop="name" label="项目名称" width="160px"/>
      <el-table-column prop="type" label="项目类别" width="160px"/>
      <el-table-column
          prop="batch"
          label="公布时间/批次"
          width="160px"
          #default="{ row: { batch } }">
        {{ batch.slice(0, 4) }}/{{batch.slice(5)}}
      </el-table-column>
      <el-table-column prop="unit" label="保护单位" width="240px"/>
      <el-table-column prop="address" label="申报地区或单位" width="240px"/>
    </el-table>
    <Pagination :total/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/tabs";
@use "@/assets/styles/inner-tabs";
@use "@/assets/styles/form";
@use "@/assets/styles/table";

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 600px;
  height: 90px;
  margin: 0 auto;
  background: url("@/assets/images/title.png") center / 100% 100% no-repeat;

  > img {
    height: 24px;
  }

  > h3 {
    font-size: 28px;
    font-weight: 800;
    color: var(--app-title-color);
  }
}

.introduce {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px 0;
  padding: 28px;
  background: white;

  > p {
    --el-text-color: #333333;

    text-indent: 2em;
    text-align: justify;
    line-height: 24px;
  }
}

:deep(.el-tabs__nav) {
  gap: 16px;
}

.container {
  padding: 25px 10px;
  margin-bottom: 32px;
  background: white;
}
</style>
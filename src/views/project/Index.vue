<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Batches, Projects, Tabs, Types } from '@/assets/type'
import types from '@/assets/share/types.json'
import batches from '@/assets/share/batches.json'
import { IconSearch } from '@tabler/icons-vue'

defineOptions({ name: 'Project' })

const active = ref('national')
const tabs: Tabs = reactive([
  { id: 0, name: 'national', label: '国家级项目' },
  { id: 1, name: 'provincial', label: '省级项目' },
])

const form = reactive({
  type: '',
  batch: '',
  keyword: '',
})

const projectTypes: Types = reactive(types)
const projectBatches: Batches = reactive(batches)
const projects: Projects = reactive([
  {
    id: 0,
    label: 'Ⅰ-141',
    name: '毕阿史拉则传说',
    type: '民间文学',
    date: '2014 第四批',
    unit: '金阳县文化馆',
    address: '凉山彝族自治州金阳县',
  },
  {
    id: 1,
    label: 'Ⅰ-152',
    name: '玛牧',
    type: '民间文学',
    date: '2014 第四批',
    unit: '喜德县文化馆',
    address: '凉山彝族自治州喜德县',
  }
])

const page = ref(1)
const changePage = (value: number) => page.value = value
</script>

<template>
  <div class="title">
    <img src="@/assets/images/body/title-left.png" alt="left">
    <h2>四川省非物质文化遗产代表性项目名录</h2>
    <img src="@/assets/images/body/title-right.png" alt="right">
  </div>
  <div class="introduce">
    <el-text tag="p">
      建立非物质文化遗产代表性项目名录，对保护对象予以确认，以便集中有限资源，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产项目进行重点保护，是非物质文化遗产保护的重要基础性工作之一。联合国教科文组织《保护非物质文化遗产公约》（以下简称《公约》）要求“各缔约国应根据自己的国情”拟订非物质文化遗产清单。建立国家级非物质文化遗产名录，是我国履行《公约》缔约国义务的必要举措。《中华人民共和国非物质文化遗产法》明确规定：“国家对非物质文化遗产采取认定、记录、建档等措施予以保存，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产采取传承、传播等措施予以保护。”“国务院建立国家级非物质文化遗产代表性项目名录，将体现中华民族优秀传统文化，具有重大历史、文学、艺术、科学价值的非物质文化遗产项目列入名录予以保护。”
    </el-text>
    <el-text tag="p">
      巴蜀文化源远流长，巴蜀儿女用勤劳和智慧创造了丰富多彩的非物质文化遗产。我省现有联合国教科文组织人类非遗代表作名录 8 项、国家非遗代表性项目 153 项，拥有省级项目 1132 项、市级 3761 项、县级 5542 项。
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
              :options="projectTypes"
              placeholder="选择项目类别"
              clearable/>
        </el-form-item>
        <el-form-item>
          <el-select
              v-model="form.batch"
              :props="{ value: 'id' }"
              :options="projectBatches"
              placeholder="选择项目批次"
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
        <el-table :data="projects">
          <el-table-column type="index" label="序号" width="100px"/>
          <el-table-column prop="label" label="项目编号" width="120px"/>
          <el-table-column prop="name" label="项目名称" width="160px"/>
          <el-table-column prop="type" label="项目类别" width="160px"/>
          <el-table-column
              prop="date"
              label="公布时间 / 批次"
              width="160px"
              #default="{ row: { date } }">
            {{ date.split(' ')[0] }} / {{ date.split(' ')[1] }}
          </el-table-column>
          <el-table-column prop="unit" label="保护单位" width="240px"/>
          <el-table-column prop="address" label="申报地区或单位" width="240px"/>
        </el-table>
        <el-pagination
            layout="prev, pager, next, jumper, slot"
            :page-count="16"
            v-model:current-page="page"
            @update:current-page="changePage">
          页/共 {{ projects.length }} 条
        </el-pagination>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style src="@/assets/styles/table.css" scoped/>
<style src="@/assets/styles/tabs.css" scoped/>
<style src="@/assets/styles/form.css" scoped/>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: var(--app-container-margin);
  width: 600px;
  height: 90px;
  background: url("@/assets/images/body/project-title.png") var(--app-background-setting);

  > img {
    height: 24px;
  }

  > h2 {
    font-size: 28px;
    font-weight: 800;
    color: var(--app-title-color);
  }
}

.introduce {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0;
  padding: 28px;
  background: white;

  > p {
    text-align: justify;
    text-indent: 2em;
    line-height: 24px;

    --app-text-color: #333333;
    --el-text-color: var(--app-text-color);
  }
}

:deep(.el-tabs__header) {
  --el-tabs-header-height: 77px;
  --el-font-size-base: 20px;
  --el-text-color-primary: var(--app-title-color);
  --el-color-primary: white;

  .el-tabs__nav {
    gap: 15px;

    > .el-tabs__active-bar {
      display: none;
    }

    > .el-tabs__item {
      width: 270px;
      padding: 0;
      font-weight: 800;
      background: url("@/assets/images/body/tab.png") var(--app-background-setting);
      transition: color var(--app-transition-time), transform var(--app-transition-time);

      &.is-active {
        background: url("@/assets/images/body/tab-selected.png") var(--app-background-setting);
      }

      &:hover {
        transform: scale(1.075);
      }

      &:not(.is-active):hover {
        color: var(--app-title-color);
      }
    }
  }
}
</style>
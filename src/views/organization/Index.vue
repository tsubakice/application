<script setup lang="ts">
import { ref } from 'vue'
import type { Article } from '@/assets/type'

defineOptions({ name: 'Organization' })

const organizations = ref<Article[]>([
  {
    id: 0,
    title: '四川省文化和旅游厅',
    content: '经省委、省政府批准，四川省文化和旅游厅(简称文化和旅游厅)是四川省人民政府组成部门，为正厅级。文化和旅游厅贯彻落实党中央关于文化和旅游工作的方针政策和省委的决策部署，在履行职责过程中坚持和加强党对文化和旅游工作的集中统一领导。'
  },
  {
    id: 1,
    title: '四川省非物质文化遗产保护中心',
    content: '四川省非物质文化遗产保护中心位于成都市光华大道二段601号国际非物质文化遗产博览园内，是由四川省机构编制委员会批准成立的全额拨款的省级公益性文化事业单位，隶属于四川省文化和旅游厅。'
  },
  {
    id: 2,
    title: '四川省非物质文化遗产保护协会',
    content: '动员我省更多的社会力量参与非遗保护，完善文化管理体制，2015年1月25日，四川省非物质文化遗产保护协会正式成立。'
  },
])
</script>

<template>
  <ul>
    <li v-for="organization in organizations" :key="organization.id">
      <div class="title">
        <img src="@/assets/images/title-left.png" alt="left">
        <h3>{{ organization.title }}</h3>
        <img src="@/assets/images/title-right.png" alt="right">
      </div>
      <div class="content">
        <el-text tag="p" truncated>{{ organization.content }}</el-text>
        <img src="@/assets/images/more-left.png" alt="left">
        <el-text>显示更多</el-text>
        <img src="@/assets/images/more-right.png" alt="right">
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  margin: 0 0 32px 0;
  padding: 20px;
  background: white;
  list-style: none;

  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
    padding: 14px 16px;
    background: url("@/assets/images/item.png") center / 100% 100% no-repeat;
    transition: box-shadow var(--app-transition-time), transform var(--app-transition-time);
    cursor: default;

    &:hover {
      box-shadow: 0 0 2px var(--app-icon-color);
      transform: scale(1.025);
    }

    &:nth-child(n + 2) {
      margin-top: 20px;
    }

    img {
      height: 18px;
    }

    > .title {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-left: 12px;

      > h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        color: var(--app-title-color);
      }
    }

    > .content {
      display: flex;
      align-items: center;
      padding: 24px 0 0 33px;

      > p {
        width: 980px;
        --el-text-font-size: 16px;
        --el-text-color: var(--app-text-placeholder-color);
      }

      > span {
        --el-text-font-size: 12px;
        --el-text-color: var(--app-color-primary);

        padding: 0 2px;
        cursor: pointer;
      }
    }
  }
}
</style>
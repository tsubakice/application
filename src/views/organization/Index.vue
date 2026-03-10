<script setup lang="ts">
import type { Articles } from '@/assets/type'
import { reactive } from 'vue'

defineOptions({ name: 'Organization' })

const articles: Articles = reactive([
  { id: 0, title: '四川省文化和旅游厅', content: '经省委、省政府批准，四川省文化和旅游厅(简称文化和旅游厅)是四川省人民政府组成部门，为正厅级。文化和旅游厅贯彻落实党中央关于文化和旅游工作的方针政策和省委的决策部署，在履行职责过程中坚持和加强党对文化和旅游工作的集中统一领导。' },
  { id: 1, title: '四川省非物质文化遗产保护中心', content: '四川省非物质文化遗产保护中心位于成都市光华大道二段601号国际非物质文化遗产博览园内，是由四川省机构编制委员会批准成立的全额拨款的省级公益性文化事业单位，隶属于四川省文化和旅游厅。' },
  { id: 2, title: '四川省非物质文化遗产保护协会', content: '为动员我省更多的社会力量参与非遗保护，完善文化管理体制，2015年1月25日，四川省非物质文化遗产保护协会正式成立。' },
])
</script>

<template>
  <ul class="list">
    <li v-for="article in articles" :key="article.id">
      <div class="title">
        <img src="@/assets/images/body/title-left.png" alt="left">
        <el-text>{{ article.title }}</el-text>
        <img src="@/assets/images/body/title-right.png" alt="right">
      </div>
      <div class="content">
        <el-text tag="p" truncated>{{ article.content }}</el-text>
        <div class="more">
          <img src="@/assets/images/body/more-left.png" alt="left">
          <el-text>显示更多</el-text>
          <img src="@/assets/images/body/more-right.png" alt="right">
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.list {
  margin-bottom: 32px;
  padding: 28px 20px;
  background: #ffffff;
  cursor: default;

  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 120px;
    padding: 14px 16px;
    background: url("@/assets/images/body/organization.png") center / 100% 100% no-repeat;
    transition: transform .5s, box-shadow .5s;

    &:nth-child(n + 2) {
      margin-top: 20px;
    }

    &:hover {
      box-shadow: 0 0 2px #bdab85;
      transform: scale(1.025);
    }
  }
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 12px;

  > img {
    height: 18px;
  }

  > span {
    font-weight: 700;

    --el-text-font-size: 18px;
    --el-text-color: #404040;
  }
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 0 33px;

  > p {
    width: 975px;

    --el-text-font-size: 16px;
    --el-text-color: #8c8c8c;
  }

  > .more {
    display: flex;
    align-items: center;
    gap: 2px;
    padding-left: 20px;

    > img {
      height: 18px;
    }

    > span {
      cursor: pointer;

      --el-text-font-size: 12px;
      --el-text-color: var(--color-primary);
    }
  }
}
</style>
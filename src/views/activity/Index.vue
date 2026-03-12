<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSubTabsStore } from '@/pinia/stores/subTabs.ts'
import type { Articles } from '@/assets/type'
import { reactive } from 'vue'

defineOptions({ name: 'Activity' })

const { active, tabs } = storeToRefs(useSubTabsStore())

const articles: Articles = reactive([
  {
    id: 0,
    title: '2023年文化和自然遗产日四川省非遗宣传展示系列活动',
    date: '2023-06-28',
    image: '/src/assets/images/body/activity-item.png',
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
      <ul>
        <li v-for="article in articles" :key="article.id">
          <img :src="article.image" alt="item">
          <div class="container">
            <h3>{{ article.title }}</h3>
            <h4>{{ article.date }}</h4>
            <div class="active"></div>
            <el-text tag="p" truncated :line-clamp="3">
              2023年6月10日是“文化和自然遗产日”。为进一步保护传承弘扬中华优秀传统文化，<br>
              提高人民群众非物质文化遗产（以下简称“非遗”）保护意识，推动文化强省旅游强省建设<br>
              ，四川省以“加强非遗系统性保护 促进可持续发展”为主题，在 “文化和自然遗产日”前后开展非遗宣传展示系列活动，并举办第四届“四川非遗购物节”。2023年是《保护非物质文化遗产公约》通过20周年，正值第31届世界大学生夏季运动会即将在蓉举办，全省500余场丰富多彩的线上线下非遗宣传展示展销活动，将对讲好四川非遗故事、推动文化交流互鉴发挥积极作用。2023年“文化和自然遗产日”四川非遗宣传展示活动暨第四届“四川非遗购物节”由省文化和旅游厅、泸州市人民政府、各市（州）文化和旅游局等单位联合举办，各项活动围绕“非遗保护 人民共享”目标，聚焦主题，内容丰富，体验性、参与性强。
            </el-text>
            <div class="more">
              <img src="@/assets/images/body/more-left.png" alt="left">
              <el-text>显示更多</el-text>
              <img src="@/assets/images/body/more-right.png" alt="right">
            </div>
          </div>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
:deep(.el-tabs__header) {
  display: none;
}

ul {
  margin: 64px 0 32px 0;

  > li {
    position: relative;
    display: flex;
    justify-content: flex-end;
    height: 400px;
    padding: 26px 14px;
    border-image: url("@/assets/images/body/organization-item.png") 48 27 40 35/20px round;

    &:nth-child(n + 2) {
      margin-top: 20px;
    }

    > img {
      position: absolute;
      top: -25px;
      left: 14px;
      width: 600px;
      height: 396px;
      transition: transform var(--app-transition-time);

      &:hover {
        transform: scale(1.025);
      }
    }

    > .container {
      width: 550px;

      > h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        color: var(--app-title-color);
      }

      > h4 {
        margin: 23px 0;
        font-size: 16px;
        font-weight: 700;
        color: var(--app-title-color);
      }

      > .active {
        width: 38px;
        height: 3px;
        background: var(--app-color-primary);
      }

      > p {
        margin-top: 32px;
        text-indent: 2em;
        line-height: 24px;

        --el-text-font-size: 14px;
        --el-text-color: #515151;
      }

      > .more {
        position: absolute;
        bottom: 75px;
        display: flex;
        align-items: center;
        gap: 2px;
        cursor: pointer;
        width: fit-content;

        > img {
          height: 18px;
        }

        > span {
          --el-text-font-size: 12px;
          --el-text-color: var(--app-color-primary);
        }
      }
    }
  }
}
</style>
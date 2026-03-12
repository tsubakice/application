<script setup lang="ts">
import { useSubTabsStore } from '@/pinia/stores/subTabs.ts'
import { storeToRefs } from 'pinia'
import type { Articles } from '@/assets/type'
import { computed, reactive, ref } from 'vue'
import { useDateStore } from '@/pinia/stores/date.ts'

defineOptions({ name: 'Wiki' })

const { active, tabs } = storeToRefs(useSubTabsStore())

const list: Articles = reactive([
  {
    id: 0,
    title: '藏族铜造像铸造技艺',
    content: '藏族铜造像铸造技艺以失蜡法为核心。首先，根据成品精细雕刻蜡膜，这也是该铸造技艺最重要的环节，最能体现造型艺术的特质；其次，在蜡膜上浇淋耐火泥浆，层层阴干至所需厚度，完成铸造所用铸模；第三，根据造型特点，采用蒸煮或火烤的方式加热型壳，使铸模内部的蜡质流出，此即为失蜡；最后，再完成铸模入窑焙烧、融化金铜、鎏金、錾刻等流程，最终完成铸造成品。',
    image: '/src/assets/images/body/box1.jpg',
  },
])

const index = ref(0)
const current = computed(() => list[Math.abs(index.value) % list.length]!)

const articles: Articles = reactive([
  { id: 0, title: '什么是国家级文化生态保护区' },
  { id: 1, title: '我国非物质文化遗产保护工作原则是什么' },
  { id: 2, title: '我国非物质文化遗产保护工作的指导方针是什么' },
  { id: 3, title: '非物质文化遗产的传承主体是什么' },
  { id: 4, title: '非物质文化遗产的保护主体是什么' },
])

const { year, month, day, week, lunar } = storeToRefs(useDateStore())
</script>

<template>
  <el-tabs v-model="active">
    <el-tab-pane :name="tabs[0]?.name" :label="tabs[0]?.label" lazy>
      <div class="time">
        <img @click="index--" src="@/assets/images/body/btn-left.png" alt="left">
        <div class="content">
          <div class="top">
            <el-text class="day">{{ day }}</el-text>
            <el-text class="year">/{{ year }}.{{ month }}</el-text>
          </div>
          <div class="bottom">
            <el-text class="week">{{ week }}</el-text>
            <el-text class="date">{{ lunar }}</el-text>
          </div>
        </div>
        <img @click="index++" src="@/assets/images/body/btn-right.png" alt="right">
      </div>
      <div class="box">
        <div class="title">
          <img src="@/assets/images/body/title-left.png" alt="left">
          <el-text>{{ current.title }}</el-text>
        </div>
        <el-text tag="p">{{ current.content }}</el-text>
        <img :src="current.image" alt="image">
      </div>
    </el-tab-pane>
    <el-tab-pane :name="tabs[1]?.name" :label="tabs[1]?.label" lazy>
      <div class="container">
        <ul>
          <li v-for="article in articles" :key="article.id">
            <el-text>{{ article.title }}</el-text>
          </li>
        </ul>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
:deep(.el-tabs__header) {
  display: none;
}

.time {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 95px;

  > img {
    height: 66px;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .top, > .bottom {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > .top {
      gap: 8px;

      --el-text-color-regular: var(--app-color-primary);

      > .day {
        --el-text-font-size: 48px;
      }

      > .year {
        --el-text-font-size: 24px;
      }
    }

    > .bottom {
      gap: 32px;
      font-weight: 800;

      --el-text-color-regular: var(--app-title-color);

      > .week {
        --el-text-font-size: 24px;
      }

      > .date {
        --el-text-font-size: 20px;
      }
    }
  }
}

.box {
  position: relative;
  height: 742px;
  margin-top: 32px;
  padding: 57px 507px 0 57px;
  background: url("@/assets/images/body/box.png") -160px 0 / contain no-repeat;

  --el-text-color-regular: white;

  > .title {
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
      height: 38px;
    }

    > span {
      font-weight: 600;

      --el-text-font-size: 36px;
    }
  }

  > p {
    margin-top: 44px;
    font-weight: 500;
    text-align: justify;
    line-height: 24px;

    --el-text-font-size: 15px;
  }

  > img {
    position: absolute;
    top: -128px;
    right: 0;
    height: 800px;
  }
}

.container {
  position: relative;
  margin-bottom: 32px;
  padding: 28px 30px;
  background: white;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 68px;
    bottom: 68px;
    width: 18px;
    border: 2px solid var(--app-icon-color);
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
  align-items: center;
  padding: 0 16px;
  height: 80px;
  border: 1px solid var(--app-icon-color);
  transition: transform var(--app-transition-time);
  cursor: pointer;

  --el-font-size-base: 16px;

  &:nth-child(n + 2) {
    margin-top: 16px;
  }

  &:hover {
    transform: rotateX(360deg);

    > span {
      --el-text-color: var(--app-color-primary);
    }
  }

  > span {
    transition: color var(--app-transition-time);

    --el-text-color: var(--app-title-color);
  }
}
</style>
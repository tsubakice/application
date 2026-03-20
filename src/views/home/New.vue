<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Tab } from '@/assets/type'
import { storeToRefs } from 'pinia'
import { useHotStore } from '@/stores/hotStore.ts'
import { useRouter } from 'vue-router'
import { useNoticeStore } from '@/stores/noticeStore.ts'
import More from '@/components/More.vue'
import Title from '@/components/Title.vue'

const active = ref('hot')
const tabs = ref<Tab[]>([
  { id: 11, name: 'hot', label: '热点关注' },
  { id: 12, name: 'notice', label: '通知公告' },
])

const { hots } = storeToRefs(useHotStore())
const { notices } = storeToRefs(useNoticeStore())
const cover = ref('https://wl-file.tsichuan.com/tour-cms/25121995e9a6a1d311487481830315f51eb66a.jpg')
const data = computed(() => active.value === 'hot' ? hots.value : notices.value)

const leftDay = computed(() => data.value[0].date!.split('-')[2])
const leftMonth = computed(() => {
  const dates = data.value[0].date!.split('-')
  return `${dates[0]}.${dates[1]}`
})

const router = useRouter()
const toNews = () => {
  router.push('/new')
  window.scroll(0, 0)
}
</script>

<template>
  <div class="container">
    <Title title="资讯动态"/>
    <el-tabs v-model="active">
      <el-tab-pane
          v-for="tab in tabs"
          :key="tab.id"
          :name="tab.name"
          :label="tab.label"
          lazy>
        <div class="content">
          <div class="left">
            <img
                :src="data[0].cover ?? cover"
                alt="cover">
            <div class="date">
              <el-text>{{ leftDay }}</el-text>
              <el-text>/{{ leftMonth }}</el-text>
            </div>
            <el-text truncated>{{ data[0].title }}</el-text>
            <el-text tag="p" :line-clamp="2">{{ data[0].content }}</el-text>
          </div>
          <div class="right">
            <div v-for="item in data.slice(1)" :key="item.id" class="item">
              <div class="mark"></div>
              <div>
                <el-text tag="p" truncated>{{ item.title }}</el-text>
                <el-text tag="p">{{ item.date }}</el-text>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <More label="更多" @click="toNews" class="more"/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/tabs";
@use "@/assets/styles/inner-tabs2";

.container {
  position: relative;
  width: var(--app-container-width);
  height: 800px;
  margin: 71px auto 0;
  padding: 34px 20px 28px;
  background: white;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 46px;
}

.left {
  width: 520px;
  cursor: pointer;

  &:hover > img {
    transform: scale(1.025);
  }

  > img {
    width: inherit;
    height: 338px;
    transition: transform var(--app-transition-time);
  }

  > .date {
    margin-top: 21px;

    > span:first-child {
      --el-text-font-size: 24px;
      --el-text-color: var(--app-title-color);
    }

    > span:last-child {
      --el-text-color: var(--app-title-color);
    }
  }

  > span {
    --el-text-font-size: 18px;
    --el-text-color: var(--app-title-color);

    margin-top: 12px;
    font-weight: 700;
  }

  > p {
    --el-text-font-size: 12px;
    --el-text-color: var(--app-placeholder-text-color);

    margin-top: 8px;
    text-align: justify;
    line-height: 20px;
  }
}

.right {
  width: 630px;
}

.item {
  display: flex;
  height: 72px;
  padding-top: 14px;
  margin-bottom: 13px;
  cursor: pointer;

  > .mark {
    width: 15px;
    height: 3px;
    margin: 8px 5px 0 14px;
    background: var(--app-color-primary);
  }

  > div {
    width: 590px;

    > p:first-child {
      --el-text-font-size: 16px;
      --el-text-color: var(--app-tab-title-color);

      font-weight: 700;
      line-height: 24px;
    }

    > p:last-child {
      --el-text-color: var(--app-placeholder-text-color);

      margin-top: 16px;
    }
  }
}

.more {
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'

interface Info {
  id: number,
  text: string,
}

const infos = ref<Info[]>([
  { id: 0, text: '地址 : 光华大道二段601号附1号国际非物质文化遗产博览园内' },
  { id: 1, text: '电话 : 028-86119039 / 028-86119080 / 86119085 /' },
  { id: 2, text: '邮箱 : ichfysc@163.com' },
])

interface Contact {
  id: number,
  label: string,
  image: string,
}

const contacts = ref<Contact[]>([
  { id: 0, label: '四川非遗微信', image: 'https://ichsc.tsichuan.com/images/fy/layout/footer-wx-qrcode.png' },
  { id: 1, label: '四川非遗微博', image: 'https://ichsc.tsichuan.com/images/fy/layout/footer-wb-qrcode.png' },
])
</script>

<template>
  <el-row class="container">
    <el-col :span="12" class="left">
      <img src="@/assets/images/logo2.png" alt="logo">
      <el-text tag="p" v-for="info in infos" :key="info.id">{{ info.text }}</el-text>
    </el-col>
    <el-col :span="12" class="right">
      <div v-for="contact in contacts" :key="contact.id" class="contact">
        <img :src="contact.image" :alt="contact.label">
        <el-text tag="p">{{ contact.label }}</el-text>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.container {
  --el-text-color-regular: white;

  line-height: 0;
}

.left {
  padding-top: 45px;

  > img {
    height: 42px;
  }

  > p {
    padding-top: 10px;
    line-height: 16px;

    &:first-of-type {
      padding-top: 25px;
    }
  }
}

.right {
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;

  > .contact {
    padding-left: 20px;

    > img {
      width: 126px;
    }

    > p {
      padding-top: 9px;
      text-align: center;
      line-height: 16px;
    }
  }
}
</style>
<script setup lang="ts">
import { reactive } from 'vue'

const lines: Array<{ id: number, text: string }> = reactive([
  { id: 0, text: '地址 : 光华大道二段601号附1号国际非物质文化遗产博览园内' },
  { id: 1, text: '电话 : 028-86119039 / 028-86119080 / 86119085 /' },
  { id: 2, text: '邮箱 : ichfysc@163.com' },
])

const contacts: Array<{ id: number, label: string, image: string }> = reactive([
  { id: 0, label: '四川非遗微信', image: '/src/assets/images/footer/wx.png' },
  { id: 1, label: '四川非遗微博', image: '/src/assets/images/footer/wb.png' },
])
</script>

<template>
  <el-row class="footer">
    <el-col :span="8" class="footer-left">
      <img src="@/assets/images/footer/logo.png" alt="logo">
      <el-text tag="p" v-for="line in lines" :key="line.id">{{ line.text }}</el-text>
    </el-col>
    <el-col :span="16" class="footer-right">
      <div v-for="contact in contacts" :key="contact.id" class="contact">
        <img :src="contact.image" :alt="contact.label">
        <el-text tag="p">{{ contact.label }}</el-text>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.footer {
  line-height: 16px;

  --el-text-color-regular: white;
}

.footer-left {
  padding-top: 45px;

  > img {
    height: 42px;
  }

  > p {
    padding-top: 10px;

    &:first-of-type {
      padding-top: 25px;
    }
  }
}

.footer-right {
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;

  > .contact {
    padding-left: 20px;

    > img {
      width: 126px;
    }

    > p {
      margin-top: 9px;
      text-align: center;
    }
  }
}
</style>
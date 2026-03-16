<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <RouterView/>
    </el-main>
    <el-footer>
      <div class="container">
        <Footer/>
      </div>
    </el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.container {
  width: var(--app-container-width);
  margin: 0 auto;
}

header {
  --el-header-height: fit-content;
  --el-header-padding: 0;
}

footer {
  --el-footer-height: 270px;
  --el-footer-padding: 0;

  background: black;
}
</style>
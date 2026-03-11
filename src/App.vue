<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <el-container>
    <el-header height="fit-content">
      <Header/>
    </el-header>
    <el-main>
      <div class="container">
        <RouterView/>
      </div>
    </el-main>
    <el-footer height="270px">
      <div class="container">
        <Footer/>
      </div>
    </el-footer>
  </el-container>
</template>

<style scoped>
.container {
  width: var(--app-container-width);
  margin: var(--app-container-margin);
}

header {
  --el-header-padding: 0;
}

main {
  --el-main-padding: 0;
}

footer {
  background: black;

  --el-footer-padding: 0;
}
</style>
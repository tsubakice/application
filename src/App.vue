<script setup lang="ts">
import Footer from '@/components/Footer.vue'
</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer height="270px">
      <div class="container">
        <Footer/>
      </div>
    </el-footer>
  </el-container>
</template>

<style scoped>
.container {
  width: var(--container-width);
  margin: var(--container-margin);
}

footer {
  background: #000000;

  --el-footer-padding: 0;
}
</style>
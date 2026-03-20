<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => {
  const [, name] = route.path.split('/')
  return name === 'home'
})

const paddingTop = computed(() => isHome.value ? '0' : '520px')
</script>

<template>
  <el-container>
    <el-header>
      <div>
        <Header/>
      </div>
    </el-header>
    <el-main :style="{ paddingTop }">
      <div :class="{ container: !isHome }">
        <RouterView/>
      </div>
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

  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    margin: 0 auto;
  }
}

main {
  --el-main-padding: 0;
}

footer {
  --el-footer-height: 270px;
  --el-footer-padding: 0;

  background: black;
}
</style>
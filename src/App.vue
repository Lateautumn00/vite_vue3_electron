<script setup lang="ts">
import UpgradeComponent from '@/components/Upgrade.vue'
const isUpgrade:boolean=
      import.meta.env.VITE_MODEL === 'production' &&
      import.meta.env.VUE_APP_UPLOAD !== ''
</script>
<template>
  <router-view></router-view>
  <!--异步组件-->
  <Suspense v-if="isUpgrade">
      <template #default>
        <UpgradeComponent />
      </template>
      <template #fallback>
        <h1>检查更新 ...</h1>
      </template>
    </Suspense>
</template>
<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

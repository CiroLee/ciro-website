<script setup lang="ts">
import notFoundSvg from '@/assets/images/not-found.svg';
</script>
<template>
  <div flex flex-col items-center mt-88px>
    <h2 mt-16px text-64px font-bold>404</h2>
    <p class="text-[var(--sub-color)]">资源不存在</p>
    <img :src="notFoundSvg" alt="" />
  </div>
</template>
<style lang="scss" scoped>
img {
  width: min(540px, 60%);
  margin: 30px 0;
}
</style>

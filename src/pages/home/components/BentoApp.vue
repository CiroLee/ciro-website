<script setup lang="ts">
import BentoBox from './BentoBox.vue';
import { myApps } from '@/config';
</script>
<template>
  <bento-box>
    <div p-bento relative>
      <p>在使用的应用</p>
      <ul
        h-48px
        mt-42px
        rounded-8px
        border-1
        border-solid
        inline-flex
        items-center
        px-4px
        class="bg-black/8 ml-50% translate-x--50% backdrop-blur border-[var(--dock-border-color)]"
      >
        <a v-for="app in myApps" :key="app.key" :href="app.url" target="_blank" class="ul-item tool-tip">
          <div class="tool-tip__item">{{ app.name }}</div>
          <img :src="app.icon" alt="" />
        </a>
      </ul>
    </div>
  </bento-box>
</template>
<style lang="scss" scoped>
.ul-item {
  width: 40px;
  height: 40px;
  position: relative;
  display: inline-block;
  &:not(:first-child) {
    margin-left: 2px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

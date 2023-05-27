<script setup lang="ts">
import BentoBox from './BentoBox.vue';
import { myApps } from '@/config';
</script>
<template>
  <bento-box>
    <div p-bento relative>
      <p>我在使用的app</p>
      <ul
        h-44px
        mt-42px
        rounded-8px
        border-1
        border-solid
        inline-flex
        items-center
        px-2px
        class="bg-black/8 ml-50% translate-x--50% backdrop-blur border-[var(--dock-border-color)]"
      >
        <a v-for="app in myApps" :key="app.key" :href="app.url" target="_blank" class="ul-item">
          <div class="ul-item__tip">{{ app.name }}</div>
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
  &__tip {
    font-size: 12px;
    height: 24px;
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--tooltip-bg);
    border-radius: 4px;
    border: 1px solid var(--tooltip-border-color);
    padding: 0 8px;
    display: none;
    @apply flex-center;
  }
  &:hover {
    .ul-item__tip {
      display: flex;
    }
  }
}
</style>

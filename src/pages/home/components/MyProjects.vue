<script setup lang="ts">
import BentoBox from './BentoBox.vue';
import { myProjects } from '@/config';
</script>
<template>
  <bento-box>
    <div p-bento>
      <p>我的项目</p>
      <ul mt-24px>
        <a
          v-for="p in myProjects"
          :key="p.key"
          :href="p.url"
          target="_blank"
          rounded-6px
          h-84px
          px-12px
          py-8px
          class="project-item"
          inline-flex
          items-center
          relative
          cursor-pointer
        >
          <img w-36px h-36px :src="p.icon" alt="" />
          <div pl-8px overflow-hidden>
            <p text-15px>{{ p.title }}</p>
            <p class="mt-4px ellipse-2 text-13px text-[var(--sub-color)]">{{ p.desc }}</p>
          </div>
        </a>
      </ul>
    </div>
  </bento-box>
</template>
<style lang="scss" scoped>
.project-item {
  margin: 0 0 8px 8px;
  width: calc(50% - 8px);
  border: 1px solid var(--box-border-color);
  transition: border-color 0.1s linear;
  &:hover {
    border-color: var(--hover-box-border-color);
  }
}

@screen lt-mobile {
  .project-item {
    margin: 0;
    width: 100%;
    &:not(:first-child) {
      margin-top: 12px;
    }
  }
}
</style>

<script lang="ts" setup>
import Icon from '@/components/icon/index.vue';
import message from '@/components/Message';
import { Navigation } from '@/types/navigation';
import { copyToClipboard } from '@/utils/utils';
defineProps<Partial<Navigation>>();
const goTo = (event: Event, url?: string) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('link-btn')) return;
  window.open(url);
};
const copyLink = (url?: string) => {
  copyToClipboard(url || '').then(() => {
    message.success('copied');
  });
};
</script>
<template>
  <div class="nav-card" @click="goTo($event, siteUrl)">
    <div flex items-center>
      <div flex items-center flex-1 overflow-hidden>
        <img w-32px object-fill :src="logoUrl" alt="" />
        <p truncate text-14px mx-8px>{{ title }}</p>
      </div>
      <div class="link-btn" @click="copyLink(siteUrl)">
        <icon name="file-copy-line" size="12px" class="mt-1px pointer-events-none" />
        <span ml-2px pointer-events-none>link</span>
      </div>
    </div>
    <div ellipse-2 text-13px mt-10px class="text-[var(--sub-color)]">{{ desc }}</div>
    <!-- ToDo 多个tag -->
    <div v-if="tag" mt-8px absolute bottom-10px>
      <span inline-flex items-center px-4px text-12px h-20px text-white rounded-2px class="bg-#158FFF leading-1em">{{
        tag
      }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nav-card {
  width: 240px;
  height: 136px;
  border-radius: 4px;
  padding: 12px;
  display: inline-block;
  border: 1px solid var(--box-border-color);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  background-color: rgb(var(--nav-card-bg));
  transition: transform 0.2s linear;
  .link-btn {
    background-color: var(--tag-bg);
    color: var(--tag-color);
    padding: 0 8px;
    font-size: 12px;
    width: 50px;
    height: 24px;
    border-radius: 3px;
    display: flex;
    @apply flex-center;

    cursor: pointer;
    &:hover {
      background-color: var(--tag-hover-bg);
      color: var(--tag-hover-color);
    }
  }
  &:hover {
    transform: translateY(-2px);
    border-color: var(--hover-box-border-color);
  }
}
</style>

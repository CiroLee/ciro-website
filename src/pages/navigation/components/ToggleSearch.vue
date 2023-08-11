<script lang="ts" setup>
import Shortcut from '@/components/Shortcut/index.vue';
import hotkeys from 'hotkeys-js';
import { isMobile, isWindows } from '@/utils/utils';

const emits = defineEmits(['openSearch']);

// 热键绑定 macos 只允许command + K
hotkeys('ctrl+k,command+k', event => {
  event.preventDefault();
  if (!isWindows() && event.metaKey) {
    emits('openSearch');
  } else if (isWindows() && event.ctrlKey) {
    emits('openSearch');
  }
});
</script>
<template>
  <div class="toggle-search">
    <span class="text-[var(--placeholder-color)]">Searching...</span>
    <div v-if="!isMobile()">
      <shortcut>{{ isWindows() ? 'Ctrl' : '⌘' }}</shortcut>
      <shortcut>K</shortcut>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.toggle-search {
  height: 48px;
  border-radius: 4px;
  padding: 0 12px;
  border: 1px solid var(--box-border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
</style>

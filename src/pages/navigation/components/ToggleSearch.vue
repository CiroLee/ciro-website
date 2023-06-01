<script lang="ts" setup>
import hotkeys from 'hotkeys-js';
import { isMac } from '@/utils/utils';

const emits = defineEmits(['openSearch']);

// 热键绑定 macos 只允许command + K
hotkeys('ctrl+k,command+k', event => {
  event.preventDefault();
  if (isMac() && event.metaKey) {
    emits('openSearch');
  } else if (!isMac() && event.ctrlKey) {
    emits('openSearch');
  }
});
</script>
<template>
  <div class="toggle-search">
    <div>
      <div class="toggle-search__shortcut-item">{{ isMac() ? '⌘' : 'Ctrl' }}</div>
      <div class="toggle-search__shortcut-item">K</div>
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
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  &__shortcut-item {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: var(--shortcut-bg);
    border: 1px solid var(--shortcut-border-color);
    color: var(--shortcut-color);
    display: inline-flex;
    font-size: 14px;
    @apply flex-center;
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>

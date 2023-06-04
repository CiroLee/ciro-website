<script lang="ts" setup></script>
<template>
  <div class="cw-shortcut"><slot /></div>
</template>
<style lang="scss">
.cw-shortcut {
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
</style>

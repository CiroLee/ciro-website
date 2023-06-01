<script lang="ts" setup>
import { themeChange } from '@/utils/theme';
import { useDark } from '@/hooks';
import NavHeader from './components/NavHeader.vue';
const isDark = useDark('color-theme');

watchEffect(() => {
  themeChange(isDark.value);
});
</script>
<template>
  <div m-auto class="layout">
    <nav-header />
    <router-view />
  </div>
</template>

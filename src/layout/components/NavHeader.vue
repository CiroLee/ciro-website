<script lang="ts" setup>
import { themeChange } from '@/utils/theme';
import { useDark } from '@/hooks';
import Icon from '@/components/icon/index.vue';
import { navigationConfig } from '@/config';
const isDark = useDark('color-theme');
const toggleColorTheme = () => {
  isDark.value = !isDark.value;
  themeChange(isDark.value);

  localStorage.setItem('color-theme', isDark.value ? 'dark' : 'light');
};
</script>
<template>
  <nav flex justify-center px-16px py-10px overflow-hidden fixed top-0 left-0 w-full>
    <router-link
      v-for="nav in navigationConfig.inner"
      :key="nav.key"
      active-class="nav__item--active"
      class="nav__item"
      :to="nav.path"
    >
      <icon v-if="nav.icon" :name="nav.icon" />
      <span>{{ nav.name }}</span>
    </router-link>
    <a v-for="nav in navigationConfig.outer" :key="nav.key" class="nav__item" :href="nav.path" target="_blank">
      <icon v-if="nav.icon" :name="nav.icon" />
      <span>{{ nav.name }}</span>
    </a>
    <div class="nav__item theme" @click="toggleColorTheme">
      <icon :name="isDark ? 'moon-line' : 'sun-line'" />
    </div>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  z-index: $nav-header-z-index;
  background-color: rgb(var(--body-bg));
}

.nav__item {
  display: inline-flex;
  height: 32px;
  padding: 0 12px;
  border-radius: 2px;
  transition: color, background-color $animate-duration ease;
  color: var(--sub-color);
  &--active,
  &:hover {
    color: var(--color);
  }
  &:not(.theme):hover {
    background-color: var(--hover-bg);
  }
  @apply flex-center;
  & .cw-icon {
    margin-right: 2px;
  }
}
</style>

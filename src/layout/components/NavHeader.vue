<script lang="ts" setup>
import Icon from '@/components/Icon/index.vue';
import { navigationConfig } from '@/config';
</script>
<template>
  <nav mt-14px>
    <router-link v-for="nav in navigationConfig.inner" :key="nav.key" class="nav__item" :to="nav.path">
      <icon v-if="nav.icon" :name="nav.icon" />
      <span>{{ nav.name }}</span>
    </router-link>
    <a v-for="nav in navigationConfig.outer" :key="nav.key" class="nav__item" :href="nav.path" target="_blank">
      <icon v-if="nav.icon" :name="nav.icon" />
      <span>{{ nav.name }}</span>
    </a>
    <div class="nav__item theme">
      <icon name="sun-line" />
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.nav__item {
  display: inline-flex;
  height: 32px;
  padding: 0 12px;
  border-radius: 2px;
  transition: color, background-color $animate-duration ease;
  color: var(--sub-color);
  &:hover {
    color: var(--color);
  }
  &:not(.theme):hover {
    background-color: var(--light-active-bg);
  }
  @apply flex-center;
  & .cw-icon {
    margin-right: 2px;
  }
}
</style>

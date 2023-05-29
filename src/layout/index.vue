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
<style lang="scss" scoped>
// md:max-w-72vw lg:w-62w

@screen lt-mobile {
  .layout {
    max-width: 100%;
    overflow: hidden;
  }
}

@screen at-mobile {
  .layout {
    max-width: 84vw;
  }
}

@screen at-md {
  .layout {
    max-width: 84vw;
  }
}

@screen at-md {
  .layout {
    max-width: 62vw;
  }
}

@screen at-lg {
  .layout {
    max-width: 62vw;
  }
}
</style>

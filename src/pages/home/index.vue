<script lang="ts" setup>
import BentoAboutMe from './components/BentoAboutMe.vue';
import BentoStacks from './components/BentoStacks.vue';
import BentoApp from './components/BentoApp.vue';
import MyProjects from './components/MyProjects.vue';
import BentoContributions from './components/BentoContributions.vue';
</script>
<template>
  <div class="home mt-54px overflow-hidden">
    <div flex-1 class="bento-grid">
      <bento-about-me row-span-2 />
      <bento-app row-span-1 />
      <bento-stacks class="stacks" row-span-2 />
      <bento-contributions />
    </div>
    <my-projects mt-10px />
  </div>
</template>
<style lang="scss" scoped>
.bento-wrapper {
  display: flex;
}

.bento-grid {
  display: grid;
  grid-template-columns: 2fr 1.8fr;
  grid-gap: 10px;
}

@screen lt-md {
  .home {
    padding: 0 16px;
  }
  .bento-wrapper {
    display: block;
  }
  .bento-grid {
    display: block;
    & > div:not(:first-child) {
      margin-top: 12px;
    }
  }
  .stacks {
    min-height: 220px;
  }
}
</style>

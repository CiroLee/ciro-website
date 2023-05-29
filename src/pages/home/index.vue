<script lang="ts" setup>
import BentoAboutMe from './components/BentoAboutMe.vue';
import BentoStacks from './components/BentoStacks.vue';
import BentoApp from './components/BentoApp.vue';
import MyProjects from './components/MyProjects.vue';
import BentoContributions from './components/BentoContributions.vue';
</script>
<template>
  <div class="home mt-54px">
    <div flex-1 class="bento-grid">
      <bento-about-me row-span-2 />
      <bento-app row-span-1 />
      <bento-stacks class="stacks" row-span-2 />
      <bento-contributions />
    </div>
    <my-projects class="my-projects" mt-10px />
  </div>
</template>
<style lang="scss" scoped>
.bento-wrapper {
  display: flex;
}

.my-projects {
  min-width: 600px;
}

.bento-grid {
  display: grid;
  grid-template-columns: 2fr 1.8fr;
  grid-gap: 10px;
}

@screen lt-mobile {
  .home {
    padding: 0 16px;
  }
  .my-projects {
    min-width: unset;
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

<script lang="ts" setup>
import BentoAboutMe from './components/BentoAboutMe.vue';
import BentoStacks from './components/BentoStacks.vue';
import BentoApp from './components/BentoApp.vue';
import BentoSponsor from './components/BentoSponsor.vue';
</script>
<template>
  <div>
    <div class="top" md:flex px-16px>
      <div flex-1 class="bento-grid">
        <bento-about-me row-span-2 />
        <bento-app h-80px row-span-1 />
        <bento-sponsor row-span-2 h-200px />
        <bento-stacks row-span-1 />
      </div>
      <div ml-10px class="w-28%">placeholder</div>
    </div>
  </div>
</template>
<style lang="scss">
.bento-grid {
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: 2fr 1.55fr;
  grid-gap: 10px;
}

@screen lt-md {
  .bento-grid {
    display: block;
    & > div:not(:first-child) {
      margin-top: 16px;
    }
  }
}
</style>

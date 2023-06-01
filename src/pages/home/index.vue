<script lang="ts" setup>
import BentoAboutMe from './components/BentoAboutMe.vue';
import BentoStacks from './components/BentoStacks.vue';
import BentoApp from './components/BentoApp.vue';
import MyProjects from './components/MyProjects.vue';
import BentoContributions from './components/BentoContributions.vue';
</script>
<template>
  <div class="home">
    <div flex-1 class="bento-grid">
      <bento-about-me row-span-2 />
      <bento-app row-span-1 />
      <bento-stacks class="stacks" row-span-2 />
      <bento-contributions />
    </div>
    <my-projects class="my-projects" mt-10px />
    <footer mb-6 mt-80px>
      <div text-center text-sm class="text-[var(--sub-color)]">
        网站备案号:
        <a class="hover:text-#4a9fff" href="https://beian.miit.gov.cn/" targe="_blank">粤ICP备2022058803号-1</a>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.home {
  margin: auto;
  margin-top: 54px;
}

.bento-grid {
  display: grid;
  grid-template-columns: 2fr 1.8fr;
  grid-gap: 10px;
}

.my-projects {
  min-width: 600px;
}

@screen lt-mobile {
  .home {
    max-width: 100%;
    overflow: hidden;
    padding: 0 16px;
  }
  .my-projects {
    min-width: unset;
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

@screen at-mobile {
  .home {
    max-width: 84vw;
  }
}

@screen at-md {
  .home {
    max-width: 84vw;
  }
}

@screen at-md {
  .home {
    max-width: 62vw;
  }
}

@screen at-lg {
  .home {
    max-width: 62vw;
  }
}
</style>

<script setup lang="ts">
import BentoBox from './BentoBox.vue';
import Icon from '@/components/icon/index.vue';
import Loading from '@/components/Loading/index.vue';
import { useHomeStore } from '@/store/home';

const store = useHomeStore();
const ulRef = ref<HTMLUListElement>();
const isLoading = ref(false);

const getContributions = async () => {
  try {
    if (!store.contributions.length) {
      isLoading.value = true;
      await store.fetchContributions('cirolee');
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
const scrollTo = (dir: 'left' | 'right') => {
  if (!ulRef.value) return;
  if (dir === 'right') {
    ulRef.value.scrollLeft = ulRef.value.scrollWidth;
  } else {
    ulRef.value.scrollLeft = 0;
  }
};
onMounted(async () => {
  await getContributions();
  scrollTo('right');
});
</script>
<template>
  <bento-box min-w-260px relative overflow-hidden>
    <div p-10px>
      <p>github贡献</p>
      <loading v-if="isLoading" />
      <div class="contribution-arrow left" @click="scrollTo('left')">
        <icon name="arrow-left-s-line" size="20px" />
      </div>
      <div class="contribution-arrow right" @click="scrollTo('right')">
        <icon name="arrow-right-s-line" size="20px" />
      </div>
      <ul ref="ulRef" class="contributions">
        <li
          v-for="con in store.contributions"
          :key="con.date"
          class="contribution-box"
          :style="{ 'background-color': con.color }"
        ></li>
      </ul>
    </div>
  </bento-box>
</template>
<style lang="scss">
.contributions {
  width: 100%;
  height: 100px;
  display: grid;
  overflow-x: auto;
  overflow-y: hidden;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(auto-fit, 12px);
  grid-gap: 2px;
  margin: 0 auto;
  margin-top: 24px;
  scroll-behavior: smooth;
  position: relative;
  mix-blend-mode: var(--mix-blend-mode);
  &::-webkit-scrollbar {
    display: none;
  }
}

.contribution-arrow {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 58%;
  border-radius: 2px;
  color: var(--arrow-btn-color);
  background-color: var(--arrow-btn-bg);
  transition: color 0.1s linear;
  display: flex;
  @apply flex-center;

  z-index: 2;
  &:hover {
    color: #fff;
  }
  &.left {
    left: 14px;
  }
  &.right {
    right: 14px;
  }
}

.contribution-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
}
</style>

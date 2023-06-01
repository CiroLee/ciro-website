<script setup lang="ts">
import ToggleSearch from './components/ToggleSearch.vue';
import Icon from '@/components/Icon/index.vue';
import type { Label, LabelRes } from '@/types/navigations';
import { HTTP_STATUS } from '@/utils/constants';

const labelsRef = ref<HTMLDivElement>();
const labels = reactive<Label[]>([]);
import request from '@/utils/request';

const handleOpenSearch = () => {
  console.log('open search');
};

const labelsScrollTo = (dir: 'left' | 'right') => {
  if (!labelsRef.value) return;
  const scrollWidth = labelsRef.value.scrollWidth;
  const step = scrollWidth / 10;
  if (dir === 'left') {
    labelsRef.value.scrollLeft -= step;
  } else {
    labelsRef.value.scrollLeft += step;
  }
};
const getLabels = async () => {
  try {
    const result = await request<LabelRes>({
      url: '/api/tools/label/query',
      method: 'POST',
    });
    if (result.code === HTTP_STATUS.success) {
      labels.length = 0;
      labels.push(...result.data.labels.sort((a, b) => a.labelOrder - b.labelOrder));
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getLabels();
});
</script>
<template>
  <div class="navigation">
    <toggle-search mx-auto class="w-[94%]" @click="handleOpenSearch" @open-search="handleOpenSearch" />
    <div mt-30px relative>
      <div class="label-arrow left" @click="labelsScrollTo('left')">
        <icon name="arrow-left-s-line mt-1px" />
      </div>
      <div ref="labelsRef" class="labels no-scrollbar">
        <div v-for="label in labels" :key="label.labelId" class="label-item">{{ label.label }}</div>
      </div>
      <div class="label-arrow right" @click="labelsScrollTo('right')">
        <icon name="arrow-right-s-line mt-1px ml-auto" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navigation {
  margin: auto;
  margin-top: 54px;
  width: 80%;
}

.labels {
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  position: relative;
  padding: 0 18px;
  scroll-behavior: smooth;
  .label-item {
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    height: 28px;
    border-radius: 3px;
    font-size: 14px;
    color: var(--tag-color);
    transition: all 0.1s linear;
    cursor: pointer;
    &:hover {
      background-color: var(--tag-bg);
      color: var(--color);
    }
  }
}

.label-arrow {
  position: absolute;
  top: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(2px);
  color: var(--color);
  z-index: 2;
  &.left {
    left: 0;
    background: linear-gradient(to right, var(--label-arrow-bg));
  }
  &.right {
    right: 0;
    background: linear-gradient(to left, var(--label-arrow-bg));
  }
}
</style>

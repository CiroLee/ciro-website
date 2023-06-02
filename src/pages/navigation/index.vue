<script setup lang="ts">
import ToggleSearch from './components/ToggleSearch.vue';
import Icon from '@/components/Icon/index.vue';
import NavCard from './components/NavCard.vue';
import request from '@/utils/request';
import { HTTP_STATUS } from '@/utils/constants';
import type { Label, LabelRes, Navigation, NavigationList, NavigationRes } from '@/types/navigation';

const labelsRef = ref<HTMLDivElement>();
const labels = reactive<Label[]>([]);
const navigation = reactive<NavigationList[]>([]);

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

// 获取标签
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

// 获取全部列表
const getNavigationList = async () => {
  try {
    const result = await request<NavigationRes>({
      url: '/api/tools/navigation/query',
      method: 'post',
      data: {
        start: 0,
        limit: 999,
      },
    });
    if (result.code === HTTP_STATUS.success) {
      return result.data.list;
    }
  } catch (error) {
    console.log(error);
  }
};

const filterByLabelId = (labelId: string, navigation: Navigation[]) => {
  return navigation.filter(item => {
    const temp = item.labels?.filter(el => el.labelId === labelId);
    return temp && temp.length;
  });
};

const renderNavList = async () => {
  await getLabels();
  const list = (await getNavigationList()) || [];
  navigation.length = 0;
  const filteredList = labels.map(item => ({
    id: item.labelId,
    title: item.label,
    contents: filterByLabelId(item.labelId, list)
      .sort((a, b) => (a.tag as string).localeCompare(b.tag as string))
      .sort((a, b) => a.title.localeCompare(b.title)),
  }));
  navigation.push(...filteredList);
};

onMounted(() => {
  renderNavList();
});
</script>
<template>
  <div class="navigation">
    <div fixed left-0 w-full class="nav-search">
      <toggle-search mx-auto class="mobile:max-w-md" @click="handleOpenSearch" @open-search="handleOpenSearch" />
      <div class="labels-wrapper">
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
    <div class="navigation__pane">
      <div v-for="nav in navigation" :id="nav.id" :key="nav.id">
        <h4 mb-2>{{ nav.title }}</h4>
        <div>
          <nav-card
            v-for="card in nav.contents"
            :key="card.navId"
            :desc="card.desc"
            :logo-url="card.logoUrl"
            :site-url="card.siteUrl"
            :title="card.title"
            :tag="card.tag"
            class="lt-mobile:!w-full mb-12px mr-10px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navigation {
  height: 100vh;
  margin: auto;
  margin-top: 52px;
}

.navigation__pane {
  padding: 0 8%;
  padding-top: 140px;
}

.nav-search {
  background-color: rgb(var(--body-bg));
  padding: 16px;
  z-index: 100;
}

.labels-wrapper {
  max-width: 80%;
  margin-left: 8%;
  margin-top: 24px;
  padding-bottom: 10px;
  position: relative;

  // mt-24px pb-2 relative
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

// .navigation__pane {

// }

@screen lt-mobile {
  .navigation {
    padding: 0 16px;
  }
  .labels-wrapper {
    margin-left: unset;
    max-width: 100%;
  }
  .navigation__pane {
    @apply px-0;
  }
}
</style>

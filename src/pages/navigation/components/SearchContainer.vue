<script lang="ts" setup>
import Shortcut from '@/components/Shortcut/index.vue';
import Icon from '@/components/icon/index.vue';
import hotkeys from 'hotkeys-js';
import Fuse from 'fuse.js';
import { uniqueObjArr } from '@/utils/utils';
import type { Navigation, NavigationList } from '@/types/navigation';

interface SearchContainerProps {
  show: boolean;
  source: NavigationList[];
}
const props = defineProps<SearchContainerProps>();
const emit = defineEmits({
  close,
});

const inputRef = ref<HTMLInputElement>();
const query = ref('');
const activeKey = ref('');
const timer = ref();
const list = reactive<Navigation[]>([]);

// 搜索处理
const handleSearch = () => {
  const fuse = new Fuse(props.source, {
    keys: ['contents.title', 'contents.tag'],
  });

  const result = fuse
    .search(query.value)
    .sort((prev, next) => prev.refIndex - next.refIndex)
    .map(doc => ({
      ...doc.item,
      contents: doc.item.title.includes(query.value)
        ? doc.item.contents
        : doc.item.contents.filter(c => c.title.includes(query.value) || c.tag?.includes(query.value)),
    }))
    .filter(item => item.contents.length);

  const flatList = result.map(item => item.contents).flat();
  list.length = 0;
  list.push(...uniqueObjArr(flatList, 'navId'));
};

const debounceSearch = () => {
  if (timer.value) clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    handleSearch();
  }, 300);
};

const handleMouseEnter = (item: Navigation) => {
  activeKey.value = item.navId;
};
const handleItemClick = () => {
  const item = list.find(el => el.navId === activeKey.value);
  window.open(item?.siteUrl);
};

hotkeys.filter = () => true;
// esc 关闭
hotkeys('esc', (event: KeyboardEvent) => {
  event.preventDefault();
  emit('close');
});

watch(
  () => props.show,
  (val: boolean) => {
    // auto focus input
    if (val) {
      nextTick(() => {
        inputRef.value?.focus();
      });
    } else {
      // 关闭清空数据
      activeKey.value = '';
      list.length = 0;
      query.value = '';
    }
  }
);
</script>
<template>
  <transition name="search-fade">
    <div v-if="show" class="search-container">
      <div class="search-container__mask" @click="emit('close')"></div>
      <div class="content mobile:!w-lg">
        <input ref="inputRef" v-model="query" class="item" autocomplete="off" type="text" @keyup="debounceSearch" />
        <div
          class="ul-box"
          :class="{ 'border-0 border-t-1 border-solid border-[var(--search-box-border-color)]': list.length }"
        >
          <ul>
            <li
              v-for="item in list"
              :id="item.navId"
              :key="item.navId"
              class="item"
              :class="{ active: item.navId === activeKey }"
              @mouseenter="handleMouseEnter(item)"
              @click.enter="handleItemClick"
            >
              <img :src="item.logoUrl" alt="" />
              <div ml-8px flex-1 mr-16px overflow-hidden>
                <p text-14px>{{ item.title }}</p>
                <p truncate class="text-12px text-[var(--sub-color)]">
                  {{ item.desc }}
                </p>
              </div>
              <shortcut class="shortcut">
                <icon name="arrow-right-line" />
              </shortcut>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.search-container {
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: $float-layer-z-index;
  &__mask {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(var(--mask-bg) / 40%);
  }
}

.content {
  width: calc(100% - 32px);
  margin: auto;
  margin-top: 76px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--search-box-border-color);
  z-index: calc($float-layer-z-index + 1);
  background-color: rgb(var(--body-bg) / 12%);
  backdrop-filter: blur(2px);
  transform-origin: center top;
  input {
    width: 100%;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: var(--color);
  }
  .ul-box {
    max-height: 60vh;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .item {
    height: 60px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      object-fit: fill;
    }
    .shortcut {
      margin: 0;
      opacity: 0;
    }
    &.active:not(input) {
      background-color: var(--search-box-item-hover-bg);
      cursor: pointer;
      .shortcut {
        opacity: 1;
      }
    }
  }
}

// animations

.search-fade-enter-active,
.search-fade-leave-active {
  transition: all $animate-duration ease;
}

.search-fade-enter-from,
.search-fade-leave-to {
  .search-container__mask {
    opacity: 0;
  }
}

.search-fade-enter-active .content,
.search-fade-leave-active .content {
  transition: all 0.1s ease-in-out;
}

.search-fade-enter-from .content {
  transform: scale(0.95);
}

.search-fade-leave-to .content {
  opacity: 0;
}
</style>

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
const usingArrowSelect = ref(false);
const arrowSelectTimer = ref();
const list = reactive<Navigation[]>([]);

// 解决箭头选择和mouse-enter选择冲突
const setUsingArrowSelect = () => {
  if (!list.length) return;
  arrowSelectTimer.value && clearTimeout(arrowSelectTimer.value);
  usingArrowSelect.value = true;
  arrowSelectTimer.value = setTimeout(() => {
    usingArrowSelect.value = false;
  }, 300);
};

// 搜索处理
const handleSearch = () => {
  const fuse = new Fuse(props.source, {
    keys: ['contents.title', 'contents.tag'],
  });
  const lowerQuery = query.value.toLowerCase();
  const result = fuse
    .search(lowerQuery)
    .sort((prev, next) => prev.refIndex - next.refIndex)
    .map(doc => ({
      ...doc.item,
      contents: doc.item.title.includes(lowerQuery)
        ? doc.item.contents
        : doc.item.contents.filter(
            c => c.title.toLowerCase().includes(lowerQuery) || c.tag?.toLowerCase().includes(lowerQuery)
          ),
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
  if (usingArrowSelect.value) return;
  activeKey.value = item.navId;
};
// 点击跳转
const handleItemClick = () => {
  const item = list.find(el => el.navId === activeKey.value);
  window.open(item?.siteUrl);
};
// 列表溢出元素
const handleOverflowElement = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'end' });
};

const handleArrowDown = () => {
  if (!activeKey.value && list.length) {
    activeKey.value = list[0].navId;
  } else {
    const index = list.findIndex(item => item.navId === activeKey.value);
    const id = list[index + 1]?.navId;
    if (id) {
      activeKey.value = id;
      // 溢出元素处理
      handleOverflowElement(id);
    }
  }
};
const handleArrowUp = () => {
  if (!activeKey.value) return;
  const index = list.findIndex(item => item.navId === activeKey.value);
  const id = list[index - 1]?.navId;
  if (id) {
    activeKey.value = id;
    handleOverflowElement(id);
  }
};

hotkeys.filter = () => true;
// 热键绑定
hotkeys('up,down,enter,esc', (event: KeyboardEvent, handler) => {
  event.preventDefault();
  if (handler.key === 'down') {
    setUsingArrowSelect();
    handleArrowDown();
  } else if (handler.key === 'up') {
    setUsingArrowSelect();
    handleArrowUp();
  } else if (handler.key === 'enter' && activeKey.value) {
    handleItemClick();
  } else if (handler.key === 'esc') {
    emit('close');
  }
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
      usingArrowSelect.value = false;
    }
  }
);
</script>
<template>
  <transition name="search-fade">
    <div v-if="show" class="search-container">
      <div class="search-container__mask" @click="emit('close')"></div>
      <div class="content sm:!w-lg">
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
                <icon name="corner-down-left-line" />
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
  background-color: rgb(var(--body-bg) / 40%);
  backdrop-filter: blur(2px);
  transform-origin: center top;
  input {
    height: 52px !important;
    width: 100%;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: var(--color);
    font-size: 16px;
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
    height: 58px;
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

<script lang="ts" setup>
import Shortcut from '@/components/Shortcut/index.vue';
import Icon from '@/components/Icon/index.vue';
import hotkeys from 'hotkeys-js';
import type { Navigation } from '@/types/navigation';

interface SearchContainerProps {
  show: boolean;
}
const props = defineProps<SearchContainerProps>();
const emit = defineEmits({
  close,
});

const inputRef = ref<HTMLInputElement>();
const activeKey = ref('');
// 搜索得到的结果 mock now
const list = reactive<Navigation[]>([
  {
    navId: 'aaa',
    title: 'xxx',
    siteUrl: 'https://www.baidu.com',
    desc: 'dsds',
    logoUrl: 'https://ciro.club/statics/images/icons/1670514276_2qXv2WbmjwXsl9QsIHcpK.svg',
  },
  {
    navId: 'bbb',
    title: 'xxx',
    siteUrl: 'https://www.baidu.com',
    desc: 'dsds',
    logoUrl: 'https://ciro.club/statics/images/icons/1670514276_2qXv2WbmjwXsl9QsIHcpK.svg',
  },
]);

const handleArrowDown = () => {
  if (!activeKey.value) {
    activeKey.value = list[0].navId;
  } else {
    const index = list.findIndex(item => item.navId === activeKey.value);
    list[index + 1]?.navId && (activeKey.value = list[index + 1].navId);
  }
};

const handleArrowUp = () => {
  if (!activeKey.value) return;
  const index = list.findIndex(item => item.navId === activeKey.value);
  list[index - 1]?.navId && (activeKey.value = list[index - 1].navId);
};

const handleMouseEnter = (item: Navigation) => {
  activeKey.value = item.navId;
};

hotkeys.filter = () => true;
// 监听箭头选择
hotkeys('up,down,enter', (event: KeyboardEvent, handler) => {
  event.preventDefault();
  if (handler.key === 'down') {
    handleArrowDown();
  } else if (handler.key === 'up') {
    handleArrowUp();
  } else if (handler.key === 'enter' && activeKey.value) {
    const item = list.find(el => el.navId === activeKey.value);
    console.log(item);
  }
});

// watch to auto-focus input
watch(
  () => props.show,
  (val: boolean) => {
    if (val) {
      nextTick(() => {
        inputRef.value?.focus();
      });
    }
  }
);

onBeforeMount(() => {
  activeKey.value = '';
});
</script>
<template>
  <transition name="search-fade">
    <div v-if="show" class="search-container">
      <div class="search-container__mask" @click="emit('close')"></div>
      <div class="content mobile:!w-lg">
        <input ref="inputRef" class="item" autocomplete="off" type="text" />
        <ul :class="{ 'border border-solid border-[var(--search-box-border-color)]': !list.length }">
          <li
            v-for="item in list"
            :key="item.navId"
            class="item"
            :class="{ active: item.navId === activeKey }"
            @mouseenter="handleMouseEnter(item)"
          >
            <img :src="item.logoUrl" alt="" />
            <div ml-8px flex-1 mr-42px overflow-hidden>
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
  max-height: 60vh;
  margin: auto;
  margin-top: 76px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--search-box-border-color);
  z-index: calc($float-layer-z-index + 1);
  backdrop-filter: blur(2px);
  transform-origin: center top;
  input {
    width: 100%;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: var(--color);
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
      display: none;
    }
    &.active:not(input) {
      background-color: var(--search-box-item-hover-bg);
      cursor: pointer;
      .shortcut {
        display: block !important;
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
  // transform: scale(0);
  opacity: 0;
}
</style>

<script lang="ts" setup>
import Icon from '@/components/icon/index.vue';
import { useEventListener } from '@/hooks';
import { debounce } from 'utils-gear';

interface BackTopProps {
  listenNode: string | HTMLElement;
  right?: number | string;
  bottom?: number | string;
  visibleHeight?: number;
}
const show = ref(false);
const props = withDefaults(defineProps<BackTopProps>(), {
  visibleHeight: 180,
  right: 20,
  bottom: 40,
});
const node =
  typeof props.listenNode === 'string'
    ? props.listenNode === 'window'
      ? window
      : document.querySelector(props.listenNode)
    : props.listenNode;
const scrollEl = props.listenNode === 'window' ? document.documentElement : (node as HTMLElement);
const right_pos = computed(() => (typeof props.right === 'number' ? `${props.right}px` : props.right));
const bottom_pos = computed(() => (typeof props.bottom === 'number' ? `${props.bottom}px` : props.bottom));

const handleScrollToTop = () => {
  node?.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
onMounted(() => {
  if (node && scrollEl) {
    useEventListener(
      node,
      'scroll',
      debounce(() => {
        const scrollTop = scrollEl.scrollTop;
        if (scrollTop > props.visibleHeight) {
          show.value = true;
        } else {
          show.value = false;
        }
      }, 200)
    );
  }
});
</script>
<template>
  <transition name="back-top">
    <div v-show="show" class="cw-back-top" @click="handleScrollToTop">
      <icon name="skip-up-line" size="20px" />
    </div>
  </transition>
</template>
<style lang="scss">
.cw-back-top {
  width: 43px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--back-top-bg);
  border: 1px solid var(--back-top-border-color);
  position: fixed;
  right: v-bind(right_pos);
  bottom: v-bind(bottom_pos);
  z-index: 10;
  cursor: pointer;
  display: flex;
  @apply flex-center;

  transition:
    border,
    color $animate-duration ease;
  &:hover {
    color: var(--back-top-hover-color);
    border-color: var(--back-top-hover-color);
  }
}

.back-top-enter-active,
.back-top-leave-active {
  transition: opacity 0.2s ease;
}

.back-top-enter-from,
.back-top-leave-to {
  opacity: 0;
}
</style>

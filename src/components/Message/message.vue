<script setup lang="ts">
import type { MessageOption } from './index';
import Icon from '@/components/icon/index.vue';
defineProps<MessageOption>();
const visible = ref(false);
const getIcon = (type: string) => {
  const typeMap = [
    ['info', 'information-fill'],
    ['success', 'checkbox-circle-fill'],
    ['warn', 'error-warning-fill'],
    ['error', 'close-circle-fill'],
  ];
  return typeMap.find(item => item[0] === type)?.[1];
};

onMounted(() => {
  visible.value = true;
});
</script>
<template>
  <transition name="msg-bounce">
    <div v-show="visible" class="cw-message" :class="type">
      <icon :name="getIcon(type)" size="20px" />
      <span class="cw-message__text">{{ content }}</span>
    </div>
  </transition>
</template>
<style lang="scss">
.cw-message {
  height: 44px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--message-bg);
  box-shadow: var(--message-shadow);
  border: 1px solid;
  z-index: $message-z-index;
  &__text {
    margin-left: 8px;
    color: var(--color);
    font-size: 14px;
  }
  &.success {
    border-color: var(--message-success-border-color);
    color: var(--message-success-color);
  }
  &.warn {
    border-color: var(--message-warn-border-color);
    color: var(--message-warn-color);
  }
  &.error {
    border-color: var(--message-error-border-color);
    color: var(--message-error-color);
  }
  &.info {
    border-color: var(--message-info-border-color);
    color: var(--message-info-color);
  }
}

.msg-bounce-enter-active {
  animation: bounce-in $animate-duration;
}

.cw-message-leave {
  animation: bounce-in $animate-duration reverse;
}

@keyframes bounce-in {
  from {
    transform: translateX(-50%) scale(0.85);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
}
</style>

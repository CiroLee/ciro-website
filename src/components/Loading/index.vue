<script lang="ts" setup>
interface LoadingProps {
  global?: boolean;
  blurMask?: boolean;
}
withDefaults(defineProps<LoadingProps>(), {
  global: false,
  blurMask: true,
});
</script>
<template>
  <div class="cw-loading" :class="[{ global, 'blur-mask': blurMask }]">
    <div class="circle"></div>
  </div>
</template>
<style lang="scss">
.cw-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--mask-bg) / 20%);
  z-index: $float-layer-z-index;
  &.global {
    position: fixed;
  }
  &.blur-mask {
    backdrop-filter: blur(2px);
  }
  .circle {
    width: 36px;
    height: 36px;
    border: 4px solid var(--loading-bg-1);
    border-top: 4px solid var(--loading-bg-2);
    border-radius: 50%;
    animation: spin 0.6s infinite linear;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

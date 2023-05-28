<script lang="ts" setup></script>
<template>
  <div class="cw-loading">
    <div class="ring"></div>
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
  backdrop-filter: blur(2px);
  z-index: $loading-z-index;
}

.ring {
  width: 36px;
  height: 36px;
  border: 4px rgb(31 192 125 / 25%) solid;
  border-top: 4px rgb(31 192 125) solid;
  border-radius: 50%;
  animation: spin 0.6s infinite linear;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

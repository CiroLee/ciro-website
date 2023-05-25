<script setup lang="ts"></script>
<template>
  <div class="bento-box"><slot /></div>
</template>
<style lang="scss" scoped>
.bento-box {
  padding: 0;
  border-radius: 8px;
  border: 1px solid transparent;
  background-image: var(--bento-box-bg), var(--bento-box-border-color);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>

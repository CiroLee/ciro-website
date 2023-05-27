<script setup lang="ts">
import BentoBox from './BentoBox.vue';
import { stacks } from '@/config';
</script>
<template>
  <bento-box class="bento-stacks">
    <div p-bento h-full flex flex-col>
      <p>Stacks</p>
      <div class="stacks-content">
        <div
          v-for="img in stacks"
          :key="img.key"
          class="stack tool-tip"
          :style="{ ...img.style, width: `${img.size}px`, height: `${img.size}px` }"
        >
          <div class="tool-tip__item">{{ img.name }}</div>
          <img absolute :src="img.url" />
        </div>
      </div>
    </div>
  </bento-box>
</template>
<style lang="scss" scoped>
.bento-stacks {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    width: 80%;
    height: 140px;
    position: absolute;
    bottom: -26px;
    left: 0;
    background: linear-gradient(to bottom, transparent 18px, rgb(230 229 229 / 88%) 19px),
      linear-gradient(to right, transparent 18px, rgb(230 229 229 / 88%) 19px);
    background-size: 19px 19px;
  }
}

.stacks-content {
  position: relative;
  flex: 1;
  margin-top: 12px;
  .tool-tip__item {
    top: -24px;
  }
  .stack {
    position: absolute;
  }
}
</style>

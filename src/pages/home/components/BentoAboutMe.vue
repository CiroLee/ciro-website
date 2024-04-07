<script setup lang="ts">
import BentoBox from './BentoBox.vue';
import Icon from '@/components/icon/index.vue';
import message from '@/components/Message';
import { copyToClipboard } from '@/utils/utils';

const handleCopy = (text: string) => {
  copyToClipboard(text).then(() => {
    message.success('Copied');
  });
};
</script>
<template>
  <bento-box>
    <div class="p-bento" text-14px>
      <div inline-flex items-center mb-3>
        <span text-32px>Hi</span>
        <span text-24px ml-1>👋</span>
      </div>
      <p>我是三只棒棒糖</p>
      <p mt-1>一名对技术充满热情的程序员</p>
      <div mt-24px flex items-center>
        <a href="https://github.com/CiroLee" target="_blank" class="icon-box">
          <icon name="github-fill" size="22px" />
        </a>
        <a href="https://space.bilibili.com/470243907" target="_blank" class="icon-box hover:text-#fb7299">
          <icon name="bilibili-line" size="22px" />
        </a>
        <a href="https://twitter.com/duduclouds" target="_blank" class="icon-box hover:text-blue">
          <icon name="twitter-x-line" size="22px" />
        </a>
        <div class="icon-box hover:text-#22c822" @click="handleCopy('rain_rainbowAce')">
          <icon name="wechat-2-line" size="22px" />
        </div>
        <div class="icon-box" @click="handleCopy('ciromail@126.com')">
          <icon name="mail-line" size="22px" />
        </div>
        <router-link to="/sponsor" class="icon-box hover:text-red">
          <icon name="heart-3-line" size="22px" />
        </router-link>
      </div>
    </div>
  </bento-box>
</template>
<style lang="scss" scoped>
.icon-box {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  transition: background-color $animate-duration linear;
  display: flex;
  @apply flex-center;
  &:hover {
    background-color: var(--me-box-hover-bg);
  }
  &:not(:first-child) {
    margin-left: 4px;
  }
}
</style>

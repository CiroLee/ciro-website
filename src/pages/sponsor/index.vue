<script setup lang="ts">
import Icon from '@/components/icon/index.vue';
const payType = ref('wechat');
</script>
<template>
  <div class="sponsor mx-auto flex flex-col">
    <div flex items-end justify-between>
      <div class="img-box">
        <div class="sun"></div>
        <img src="@/assets/images/beach-dog.svg" alt="" />
      </div>
      <div class="sponsor-pay">
        <div w-160px h-160px rounded-4px bg-white flex flex-center mx-auto mt-32px>
          <img v-if="payType === 'wechat'" class="w-40px h-40px" src="@/assets/images/wechat-pay.png" alt="" />
          <img v-if="payType === 'alipay'" class="w-40px h-40px" src="@/assets/images/alipay.png" alt="" />
        </div>
        <div absolute bottom-32px flex class="left-50% translate-x-[-50%]">
          <div w-44px h-44px rounded-22px bg-white flex flex-center active:bg-gray-200 @click="payType = 'wechat'">
            <icon name="wechat-pay-fill" color="#07d130" size="36px" />
          </div>
          <div w-44px h-44px rounded-22px bg-white flex flex-center ml-6 active:bg-gray-200 @click="payType = 'alipay'">
            <icon name="alipay-line" color="#00AEF9" size="36px" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-[var(--sub-color)] text-center mt-48px">you are so beautiful/handsome when you sponsor!</div>
  </div>
</template>
<style lang="scss" scoped>
.sponsor {
  margin-top: 140px;
}

.img-box {
  position: relative;
  .sun {
    --radius: 90px;

    width: var(--radius);
    height: var(--radius);
    border-radius: var(--radius);
    position: absolute;
    top: 6px;
    background-color: #e01187;
    z-index: -1;
    animation: left-to-right 4s linear infinite;
  }
  img {
    width: 240px;
  }
}

.sponsor-pay {
  width: 260px;
  height: 400px;
  border-radius: 4px;
  background: linear-gradient(180deg, #8a31b4 0%, #6a31b4 100%);
  margin-left: 10%;
  transition: box-shadow $animate-duration ease;
  position: relative;
  z-index: 1;
  img {
    width: 140px;
    height: 140px;
  }
  &:hover {
    box-shadow: 10px 10px 0 rgb(107 49 180 / 60%);
  }
  &::after {
    content: '';
    width: 120px;
    height: 180px;
    left: 0;
    bottom: 0;
    opacity: 0.12;
    position: absolute;
    background: url('@/assets/images/pay-love.svg') no-repeat center;
    background-size: cover;
    z-index: -1;
  }
}

@keyframes left-to-right {
  50%,
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(8px);
  }
  75% {
    transform: translateX(-8px);
  }
  100% {
    transform: translateX(0);
  }
}

@screen at-mobile {
  .sponsor {
    max-width: 84vw;
  }
}

@screen at-sm {
  .sponsor {
    max-width: 84vw;
  }
}

@screen at-md {
  .sponsor {
    max-width: 72vw;
  }
}

@screen at-lg {
  .sponsor {
    max-width: 62vw;
  }
}

@screen at-lg {
  .sponsor {
    max-width: min(52vw, 860px);
  }
}

@screen lt-mobile {
  .sponsor {
    margin-top: 100px;
  }
  .img-box {
    display: none;
  }
  .sponsor-pay {
    width: calc(100% - max(48px, 20%));
    margin: auto;
  }
}
</style>

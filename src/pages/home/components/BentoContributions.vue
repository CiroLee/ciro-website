<script setup lang="ts">
import BentoBox from './BentoBox.vue';
import Loading from '@/components/Loading/index.vue';
import request from '@/utils/request';
import type { ContributionsRes, ContributionItem } from '@/types/github';

const contributions = reactive<ContributionItem[]>([]);
const ulRef = ref<HTMLUListElement>();
const lsLoading = ref(false);

const getContributions = async () => {
  try {
    lsLoading.value = true;
    const result = await request<ContributionsRes>({
      method: 'GET',
      url: '/api/tools/github/contributions',
      params: { name: 'cirolee' },
    });
    contributions.length = 0;
    contributions.push(...result.data.contributions);
    lsLoading.value = false;
  } catch (error) {
    console.error(error);
  }
};
onMounted(async () => {
  await getContributions();
  if (ulRef.value) {
    ulRef.value.scrollLeft = 10000000;
  }
});
</script>
<template>
  <bento-box min-w-260px relative>
    <div p-10px>
      <p>github贡献</p>
      <loading v-if="lsLoading" />
      <ul ref="ulRef" class="contributions">
        <li
          v-for="con in contributions"
          :key="con.date"
          class="contribution-box"
          :style="{ 'background-color': con.color }"
        ></li>
      </ul>
    </div>
  </bento-box>
</template>
<style lang="scss" scoped>
.contributions {
  width: 100%;
  height: 100px;
  display: grid;
  overflow-x: auto;
  overflow-y: hidden;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(auto-fit, 12px);
  grid-gap: 2px;
  margin: 0 auto;
  margin-top: 24px;
  scroll-behavior: smooth;
}

.contribution-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
}
</style>

import { defineStore } from 'pinia';
import request from '@/utils/request';
import type { ContributionsRes, ContributionItem } from '@/types/github';

export const useHomeStore = defineStore('useHomeStore', () => {
  const contributions = reactive<ContributionItem[]>([]);
  const fetchContributions = async (name: string) => {
    const res = await request<ContributionsRes>({
      method: 'GET',
      url: '/api/tools/github/contributions',
      params: { name },
    });
    contributions.length = 0;
    contributions.push(...res.data.contributions);
  };

  return {
    contributions,
    fetchContributions,
  };
});

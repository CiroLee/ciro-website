import vscodePng from '@/assets/images/vscode.png';
import arcPng from '@/assets/images/arc.png';
import dbeaverPng from '@/assets/images/dbeaver.png';
import figmaPng from '@/assets/images/figma.png';
import notion from '@/assets/images/notion.png';
import warpPng from '@/assets/images/warp.png';
import raycastPng from '@/assets/images/raycast.png';
import { CSSProperties } from 'vue';
interface NavigationConfig {
  key: string;
  name: string;
  path: string;
  icon?: string;
}
interface StacksConfig {
  key: string;
  url: string;
  name: string;
  size: number;
  style: CSSProperties;
}

interface ProjectConfig {
  key: string;
  icon: string;
  title: string;
  desc: string;
  url: string;
}
export const navigationConfig: { inner: NavigationConfig[]; outer: NavigationConfig[] } = {
  inner: [
    {
      name: 'Me',
      key: 'me',
      path: '/',
      icon: 'user-5-line',
    },
    {
      name: '导航',
      key: 'navigation',
      path: '/navigation',
      icon: 'compass-3-line',
    },
  ],
  outer: [
    {
      name: 'Github',
      key: 'github',
      path: 'https://github.com/CiroLee',
      icon: 'github-line',
    },
  ],
};

export const myApps = [
  {
    key: 'vscode',
    name: 'vscode',
    icon: vscodePng,
    url: 'https://code.visualstudio.com/',
  },
  {
    key: 'warp',
    name: 'warp',
    url: 'https://www.warp.dev/',
    icon: warpPng,
  },
  {
    key: 'raycast',
    name: 'raycast',
    url: 'https://raycast.com/',
    icon: raycastPng,
  },
  {
    key: 'dbeaver',
    name: 'dbeaver',
    url: 'https://dbeaver.io/',
    icon: dbeaverPng,
  },
  {
    key: 'figma',
    name: 'figma',
    url: 'https://www.figma.com/',
    icon: figmaPng,
  },
  {
    key: 'notion',
    name: 'notion',
    url: 'https://www.notion.so/',
    icon: notion,
  },
  {
    key: 'arc',
    name: 'arc',
    url: 'https://arc.net/',
    icon: arcPng,
  },
];

export const stacks: StacksConfig[] = [
  {
    key: 'vue',
    name: 'vue',
    url: 'https://ciro.club/statics/images/icons/1670514776_ybxUFsQJCMlhaGobXDsuY.svg',
    size: 50,
    style: { top: '10px', right: '6%' },
  },
  {
    key: 'react',
    name: 'react',
    url: 'https://ciro.club/statics/images/icons/1675226831_cPZJEVfqA9kmaUN8F6_n3.svg',
    size: 50,
    style: { top: '86px', right: '0' },
  },
  {
    key: 'pinia',
    name: 'pinia',
    url: 'https://ciro.club/statics/images/icons/1669559326_V-M4NycrmQiRkDRTv8SJV.svg',
    size: 50,
    style: { top: '88px', right: '32%' },
  },
  {
    key: 'linux',
    name: 'linux',
    url: 'https://ciro.club/statics/images/icons/1669479147_tjeemo5hvqOMYnY1ZhyWd.svg',
    size: 50,
    style: { top: '100px', right: '13%' },
  },
  {
    key: 'node',
    name: 'node',
    url: 'https://ciro.club/statics/images/icons/1671039748_fN7T08vCDhC9SODIsCXcz.svg',
    size: 36,
    style: { top: '58px', left: '38%' },
  },
  {
    key: 'go',
    name: 'go',
    url: 'https://ciro.club/statics/images/icons/1685211661_9tOE8v0fkfsNpCKabEz8C.svg',
    size: 54,
    style: { top: '30px', right: '72%' },
  },
  {
    key: 'zustand',
    name: 'zustand',
    url: 'https://ciro.club/statics/images/icons/1669655069_WlBA0yAySfM3sIDYBwTgy.svg',
    size: 44,
    style: { top: '110px', right: '58%' },
  },
  {
    key: 'unocss',
    name: 'unocss',
    url: 'https://ciro.club/statics/images/icons/1670514551_pTNhaW5whq_Kg5KUkxosu.svg',
    size: 34,
    style: { top: '48px', right: '20%' },
  },
  {
    key: 'tailwind',
    name: 'tailwind',
    url: 'https://ciro.club/statics/images/icons/1670514397_sRxsmsfZ_ag3j7bn9QBbw.svg',
    size: 34,
    style: { top: '20px', right: '32%' },
  },
  {
    key: 'vite',
    name: 'vite',
    url: 'https://ciro.club/statics/images/icons/1671037687_Gbt6gyAnONMkLA63Jm_43.svg',
    size: 44,
    style: { top: '100px', right: '76%' },
  },
];

export const myProjects: ProjectConfig[] = [
  {
    icon: 'https://ciro.club/statics/images/icons/1682873373_YggRbBlEO27aMfDQel6K6.svg',
    key: 'chaty',
    title: 'ChatY',
    desc: 'ChatY 是基于 wails开发的开源 GPT 桌面客户端。它也许是你电脑中最漂亮的 ChatGPT 助手',
    url: 'https://github.com/CiroLee/ChatY',
  },
  {
    icon: 'https://ciro.club/statics/images/icons/1675059915_m7YGDKvxFJ6ZxxxSNx7Fg.svg',
    key: 'bf',
    title: 'bf',
    desc: '基于百度翻译Api的命令行翻译工具',
    url: 'https://github.com/CiroLee/bf',
  },
  {
    icon: 'https://ciro.club/statics/images/icons/1670514276_2qXv2WbmjwXsl9QsIHcpK.svg',
    title: '搜索直达',
    key: 'direct-search',
    desc: '直达搜索目标页面，快人一步',
    url: 'https://github.com/CiroLee/direct-search',
  },
  {
    key: 'tiny-lorem',
    title: 'tiny-lorem',
    desc: '用于生成模拟数据的现代JavaScript工具库',
    icon: 'https://ciro.club/statics/images/icons/1671040126_sJJ__CzS1xMlbFRzvtJnz.svg',
    url: 'https://github.com/CiroLee/tiny-lorem',
  },
  {
    key: 'termts',
    title: 'termts',
    desc: 'termts是一个集合，包含小巧而实用的终端脚本工具',
    icon: 'https://ciro.club/statics/images/icons/1677073378_cn9z8zOsGVkHhuXm-EcXY.svg',
    url: 'https://github.com/CiroLee/termts',
  },
];

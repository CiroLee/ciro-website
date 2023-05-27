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
export const navigationConfig: { inner: NavigationConfig[]; outer: NavigationConfig[] } = {
  inner: [
    {
      name: '首页',
      key: 'home',
      path: '/',
      icon: 'home-smile-line',
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
    style: { top: '10px', right: '20px' },
  },
  {
    key: 'react',
    name: 'react',
    url: 'https://ciro.club/statics/images/icons/1675226831_cPZJEVfqA9kmaUN8F6_n3.svg',
    size: 50,
    style: { top: '86px', right: '0px' },
  },
  {
    key: 'pinia',
    name: 'pinia',
    url: 'https://ciro.club/statics/images/icons/1669559326_V-M4NycrmQiRkDRTv8SJV.svg',
    size: 60,
    style: { top: '82px', left: '65px' },
  },
  {
    key: 'linux',
    name: 'linux',
    url: 'https://ciro.club/statics/images/icons/1669479147_tjeemo5hvqOMYnY1ZhyWd.svg',
    size: 56,
    style: { bottom: '12px', right: '56px' },
  },
  {
    key: 'node',
    name: 'node',
    url: 'https://ciro.club/statics/images/icons/1671039748_fN7T08vCDhC9SODIsCXcz.svg',
    size: 36,
    style: { top: '68px', left: '130px' },
  },
  {
    key: 'go',
    name: 'go',
    url: 'https://ciro.club/statics/images/icons/1685211661_9tOE8v0fkfsNpCKabEz8C.svg',
    size: 54,
    style: { top: '30px', left: '42px' },
  },
  {
    key: 'zustand',
    name: 'zustand',
    url: 'https://ciro.club/statics/images/icons/1669655069_WlBA0yAySfM3sIDYBwTgy.svg',
    size: 48,
    style: { top: '130px', left: '120px' },
  },
  {
    key: 'unocss',
    name: 'unocss',
    url: 'https://ciro.club/statics/images/icons/1670514551_pTNhaW5whq_Kg5KUkxosu.svg',
    size: 34,
    style: { top: '48px', right: '80px' },
  },
  {
    key: 'tailwind',
    name: 'tailwind',
    url: 'https://ciro.club/statics/images/icons/1670514397_sRxsmsfZ_ag3j7bn9QBbw.svg',
    size: 34,
    style: { top: '20px', left: '120px' },
  },
];

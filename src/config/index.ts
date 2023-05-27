import vscodePng from '@/assets/images/vscode.png';
import arcPng from '@/assets/images/arc.png';
import dbeaverPng from '@/assets/images/dbeaver.png';
import figmaPng from '@/assets/images/figma.png';
import notion from '@/assets/images/notion.png';
import warpPng from '@/assets/images/warp.png';
import raycastPng from '@/assets/images/raycast.png';
interface NavigationConfig {
  key: string;
  name: string;
  path: string;
  icon?: string;
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

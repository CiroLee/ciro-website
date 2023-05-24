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

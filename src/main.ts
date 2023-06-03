import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Layout from './layout/index.vue';
import router from './router';
import './styles/minireset.css';
import './styles/theme.scss';
import './styles/global.scss';
import 'remixicon/fonts/remixicon.css';
import 'virtual:uno.css';

const app = createApp(Layout);
document.documentElement.classList.add('dark');
app.use(createPinia());
app.use(router);
app.mount('#app');

const MODE = import.meta.env.MODE;
if (MODE !== 'development') {
  // 百度统计
  // eslint-disable-next-line no-var
  var _hmt: any = _hmt || [];
  window._hmt = _hmt;

  const hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?9b7812e3ab360b87c7f5d76a383f6777';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(hm, s);
}

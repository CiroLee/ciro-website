import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Layout from './layout/index.vue';
import router from './router';
import './style/minireset.css';
import './style/theme.scss';
import './style/global.scss';
import 'remixicon/fonts/remixicon.css';
import 'virtual:uno.css';

const app = createApp(Layout);

app.use(createPinia());
app.use(router);
app.mount('#app');

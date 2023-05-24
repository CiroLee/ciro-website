import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style/minireset.css';
import './style/theme.scss';
import './style/global.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');

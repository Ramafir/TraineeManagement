import '@/bootstrap/axios.config';
import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import { store } from '@/store';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/styles/tailwind.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives
});

app.use(store);
app.use(vuetify);
app.use(router);

app.mount('#app');

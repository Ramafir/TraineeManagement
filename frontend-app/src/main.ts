import '@/bootstrap/axios.config';
import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import { store } from '@/store';
import VueToast from 'vue-toastification';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import 'vue-toastification/dist/index.css';
import '@/assets/styles/tailwind.css';

import App from './App.vue';
import router from './router';
import { toastError, toast, options } from '@/plugins/toast';

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives
});

app.use(store);
app.use(vuetify);
app.use(router);
app.use(VueToast, options);

app.config.globalProperties.$toast = toast;

app.config.globalProperties.$toastError = toastError;

app.mount('#app');

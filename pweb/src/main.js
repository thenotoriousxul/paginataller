import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify'; // Importa la configuración de Vuetify

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(vuetify); // Usa Vuetify en tu aplicación
app.use(createPinia());
app.use(router);

app.mount('#app');

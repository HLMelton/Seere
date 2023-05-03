import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { inject } from '@vercel/analytics';

inject({
    debug: false,
  });

// App Initializations
const app = createApp(App);
const pinia = createPinia();

// Pinia Plugins
pinia.use(piniaPluginPersistedstate)

// App Mounting
app.use(pinia);
app.mount('#app');
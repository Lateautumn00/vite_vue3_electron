import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import pinia from './stores/index'
const app = createApp(App)
installElementPlus(app)
app.use(pinia).use(router).mount('#app')

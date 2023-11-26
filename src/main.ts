import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
const app=createApp(App)
installElementPlus(app)
app.use(router).mount('#app')

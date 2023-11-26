import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import electronRender from 'vite-plugin-electron-renderer'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./viteEnv",
  envPrefix: ["VITE", "VENUS"], //这个时候，我们可以将VITE_、VENUS_开头的变量统统透传给客户端
  server: {
    port: 8888,
    cors: true, // 允许跨域
    hmr: true, // 开启热更新
  },
  plugins: [
    vue(),
    electron({
      entry:'electron/main.ts'
    }),
    electronRender()
  ],
  resolve:{
    //别名
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,'src')
      },
      {
        find:'compontents',
        replacement:resolve(__dirname,'src/components')
      }
    ]
  },
  //全局引入css
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/globalVar.scss";`
      }
    }
  }
})

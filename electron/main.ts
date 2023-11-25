import { app, BrowserWindow } from 'electron'
const createWindow=()=>{
  const win = new BrowserWindow(
    {
      webPreferences: {
        devTools: true,
        // 集成网页和 Node.js，也就是在渲染进程中，可以调用 Node.js 方法
        nodeIntegration: true,
        contextIsolation: false,
      }
    }
  )
  //console.log(import.meta.env,process.env.VITE_DEV_SERVER_URL)  //环境变量
  //process.env.VITE_DEV_SERVER_URL
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile('dist/index.html')
  }
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate',()=>{
    createWindow()
  })
  app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
      app.quit();
    }
  })
})


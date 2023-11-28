import { app, BrowserWindow } from 'electron'
import { upgradeHandle } from './upgrade'
import path from 'path'
let win: any = null
const createWindow = () => {
	win = new BrowserWindow({
		useContentSize: true,
		width: 1280,
		height: 720,
		minWidth: 1280,
		minHeight: 720,
		titleBarStyle: 'hidden',
		//transparent: true, //窗口透明  设置后还原窗口win.restore()无效
		//backgroundColor: '#000', //背景颜色
		title: '知乎者也', //标题
		autoHideMenuBar: true, //是否隐藏菜单栏
		frame: false, //无边框   不使用无边框模式 需要屏蔽掉  并将router/index.ts 路由中的替换  原始边框路由
		movable: true,
		webPreferences: {
			devTools: true,
			// 集成网页和 Node.js，也就是在渲染进程中，可以调用 Node.js 方法
			nodeIntegration: true,
			contextIsolation: false,
			webSecurity: false, //解决跨域
			preload: path.join(__dirname, 'preload.js'),
		},
	})
	//console.log(import.meta.env,process.env.VITE_DEV_SERVER_URL)  //环境变量
	//process.env.VITE_DEV_SERVER_URL
	if (process.env.VITE_DEV_SERVER_URL) {
		win.loadURL(process.env.VITE_DEV_SERVER_URL)
		win.webContents.openDevTools()
	} else {
		win.loadFile('dist/index.html')
		win.webContents.openDevTools() //正式环境用要去掉
		upgradeHandle(win) //检测版本更新
	}
	//解决透明背景无边框的情况下  失去焦点显示标题栏的问题
	// win.on('blur', () => {
	// 	win.setBackgroundColor('#00000000')
	// })

	// win.on('focus', () => {
	// 	win.setBackgroundColor('#00000000')
	// })
	// 当应用所有窗口关闭要做的事情
	win.on('closed', () => {
		win = null
	})
}
app.whenReady().then(() => {
	if (win === null) createWindow()
	app.on('activate', () => {
		createWindow()
	})
	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})
})

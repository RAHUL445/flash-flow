const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  console.log(__dirname);
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname,'img/flash_logo.png')
  })

  win.loadFile(path.join(__dirname,'index.html'));
}
console.log(path.join(__dirname,'img/flash_logo.ico'));


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

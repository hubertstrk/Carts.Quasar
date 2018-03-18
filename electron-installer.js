const electronInstaller = require('electron-winstaller')

const resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: 'C:/Sources/Carts.Quasar/dist/electron-mat/carts',
  outputDirectory: 'C:/Sources/Carts.Quasar/dist/electron-mat/carts/Installerx64',
  authors: 'Hubert Stärk <hubert.staerk@gmail.com>',
  exe: 'carts.exe',
  name: 'carts'
})

resultPromise.then(() => console.log('It worked!'), (e) => console.log(`No dice: ${e.message}`))
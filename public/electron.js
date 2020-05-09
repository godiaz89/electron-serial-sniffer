const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const isDev = require('electron-is-dev');
const serialPort = require('serialport');
const { default: installExtension, REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const ipcEvents = require('./ipcEvents')
var Readline = serialPort.parsers.Readline;

function createWindow() {
  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.resolve(__dirname, "preload.js")
      // preload:path.join(app.getAppPath(),'preload.js')
    }
  })
  // and load the index.html of the app.
  //   win.loadFile('index.html')
  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  // console.log(process.ELECTRON_ENV,isDev)

  // Abre las herramientas de desarrollo (DevTools).
  isDev&&win.webContents.openDevTools()

  win.setMenuBarVisibility(false)
  // win.once('ready-to-show', () => {
  //   console.log('isdev:',isDev)
  //   win.show()
  // })

  ipcMain.handle(ipcEvents.IPC_PORT_LIST, async (e, ...args) => await serialPort.list());

  var openedPorts = [];
  ipcMain.on(ipcEvents.IPC_START_SNIFFING, (e, ...ports) => {
    try {
      openedPorts.forEach(p => p.close(e => console.log('Cleaning openedPorts before starting to sniff: ')));
      openedPorts = [];
      openedPorts = ports.map(p => {
        let { baudRate, dataBits, stopBits, parity, rtscts, xon, xoff, xany } = p
        let config = { baudRate, dataBits, stopBits, parity, rtscts, xon, xoff, xany }
        return new serialPort(p.path, config, e => e && console.log('Error inside serial port constructor: ', e))
      });
      openedPorts.forEach(p => {
        const parser = p.pipe(new Readline());
        parser.on('data', data => {
          console.log(data)
          e.reply(ipcEvents.IPC_PORT_DATA, p.path, data)
        });
        parser.on('error', e => console.log(`Parser error for port ${p.path}`, e));
      });
    } catch (error) {
      console.log('Error when starting to sniff: ', error)
    }


  });

  ipcMain.on(ipcEvents.IPC_STOP_SNIFFING, (e, ...args) => {
    openedPorts.forEach(p => {
      p.close(e => e && console.log(`Closing port ${p.path}: `, e));
    });
  })

  ipcMain.on(ipcEvents.IPC_CLOSE, (e, args) => win.close())

  ipcMain.on(ipcEvents.IPC_MAXIMIZE, (e, args) => {
    console.log('maximiza')
    win.isMaximized() ? win.unmaximize() : win.maximize()
  })

  ipcMain.on(ipcEvents.IPC_MINIMIZE, (e, args) => {
    console.log('minimizando');
    win.minimize()
  })


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algunas APIs pueden usarse sólo después de que este evento ocurra.
// app.whenReady().then(createWindow)
app.whenReady().then(() => {
  createWindow();
  isDev && installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  isDev && installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // En macOS es común para las aplicaciones y sus barras de menú
  // que estén activas hasta que el usuario salga explicitamente con Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // En macOS es común volver a crear una ventana en la aplicación cuando el
  // icono del dock es clicado y no hay otras ventanas abiertas.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. También puedes ponerlos en archivos separados y requerirlos aquí.





// serialPort.list();

// var createHello = edge.func(function () {/*
//   async (input) =>
//   {
//       return (Func<object,Task<object>>)(async (i) => { 
//           Console.WriteLine("Hello from .NET"); 
//           return null; 
//       });
//   }
// */});

// var hello = createHello(null, true); 
// hello(null, true); // prints out "Hello from .NET"

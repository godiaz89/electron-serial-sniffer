const { contextBridge, ipcRenderer } = require('electron');
// import {contextBridge,ipcRenderer} from 'electron'

console.log('RUNNING PRELOAD!!!')
contextBridge.exposeInMainWorld(
    'myIpc',
    {
        'send':(channel,...args)=>ipcRenderer.send(channel,...args),
        'invoke':async (channel,...args)=>await ipcRenderer.invoke(channel,...args),
        'on':(channel,callback)=>ipcRenderer.on(channel,callback),
        'removeAllListeners':(channel)=>ipcRenderer.removeAllListeners(channel)
    }
)
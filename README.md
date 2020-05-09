# Electron Serial port sniffer
This proyect is a serial port sniffer made with Electron, Reactjs, Redux and Photonjs. 
Additionaly it uses the node serialport module (https://serialport.io/).<br>
It enumerates the serial ports on your PC and lets you configurate and sniff data passing through them.<br>
The data is showed grouped and in one tab for every port.


## Installation

The first step is to clone the proyect:

### `git clone https://github.com/godiaz89/electron-serial-sniffer.git`

Install dependencies

### `npm install`

You may need to rebuild some node modules to be able to use them with this particular version of electron. It is possible to do this using electron-rebuild.<br>

### `node_modules\.bin\electron-rebuild --m "module-dir"`

And finally building the proyect.

### `npm run build`

The installation files will be in the "dist" folder.

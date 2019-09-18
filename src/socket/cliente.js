import openSocket from 'socket.io-client';
import { } from 'dotenv/config';
const socket = openSocket(process.env.BKENDURL || 'http://localhost:8000');
const ss = require('socket.io-stream')


export const readDataStream = (event, params, datastream) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('readDataStream manda ', params, datastream + socket)
            ss(socket).emit(event.get, datastream, params);
            resolve(datastream)

        } catch (error) {
            reject(error)
        }
    })
}


/***
 * Emite evento con parametros opcionales ingresados
 */
export const trae = (event, params) => {
    console.log('Lanzando trae con: ', event, '+', params)
    if (params) socket.emit(event.get, params);
}


/***
 * Consume evento y ejecuta callback
 */
export const consume = (event, cb) => {
    socket.on(event.take, (rows) => {
        console.log('LLego evento: ', event, 'con: ', rows);
        cb(rows);
    })
}


/***
 * Envia evento y escucha la respuesta para los reportes olap -- Funcion general
 */
export const sendReport = (mes,event,cb) => {
    socket.emit(event.get, mes);
    socket.on(event.take, rows => {
        cb(rows);
    });
}



export const traeUsers = () => {
    //console.log('ejecuta traeusers');
    socket.emit('getUsersAvaya');
}
export const consumirUsers = (cb) => {
    socket.on('takeUsersAvaya', rows => {
        //console.log('log en consumirUsers',rows);
        cb(rows);
    });
}

export const traeUserList = () => {
    //console.log('ejecuta traeusers');
    socket.emit('getUsersList');
}
export const consumirUserList = (cb) => {
    socket.on('takeUsersList', rows => {
        //console.log('log en consumirUsers',rows);
        cb(rows);
    });
}

// export const traeEventosMalTratados = () => {
//     socket.emit('getEventosMalTratados');
// }
// export const consumeEventosMT = (cb) => {
//     socket.on('takeEventosMT', rows => {
//         //console.log('log en consumeEventosMT',rows);
//         cb(rows);
//     });
// }

export const traeEventosxOp = () => {
    socket.emit('getEventosxOp');
}

export const consumeEventosxOp = (cb) => {
    socket.on('takeEventosxOp', rows => {
        //console.log('log en consumeEventosMT',rows);
        cb(rows);
    });
}


export const traeEventosxOpMensual = (mes) => {
    socket.emit('getEventosxOpMensuales', mes);
}

export const consumeEventosxOpMensual = (cb) => {
    socket.on('takeEventosxOpMensuales', rows => {
        //console.log('log en consumeEventosMT',rows);
        cb(rows);
    });
}


export const traeLatLonMap = () => {
    socket.emit('getLatLonMap');
}

export const consumeLatLonMap = (cb) => {
    socket.on('takeLatLonMap', rows => {
        //console.log('log en consumeEventosMT',rows);
        cb(rows);
    });
}




export const genReporteEMT = (mes, cb) => {
    socket.emit('genOLAPEMT', mes);
    socket.on('takeOLAPEMT', rows => {
        cb(rows);
    });
}

export const genReporteExO = (mes, cb) => {
    socket.emit('genOLAPExO', mes);
    socket.on('takeOLAPExO', rows => {
        cb(rows);
    });
}


export const genOLAPTMR = (mes, cb) => {
    socket.emit('genOLAPTRM', mes);
    socket.on('takeOLAPTRM', rows => {
        cb(rows);
    });
}

export const genOLAPMS = (cb) => {
    socket.emit('genOLAPMS');
    socket.on('takeOLAPMS', rows => {
        cb(rows);
    });
}


export const genOLAPMM = (cb) => {
    socket.emit('genOLAPMM');
    socket.on('takeOLAPMM', rows => {
        cb(rows);
    });
}



export const genOLAPZAS = (mes, cb) => {
    socket.emit('genOLAPZAS', mes);
    socket.on('takeOLAPZAS', rows => {
        cb(rows);
    });
}



export const genOLAPZAD = (cb) => {
    socket.emit('genOLAPZAD');
    socket.on('takeOLAPZAD', rows => {
        cb(rows);
    });
}



export const genOLAPFAxC = (mes, cb) => {
    socket.emit('genOLAPFAxC', mes);
    socket.on('takeOLAPFAxC', rows => {
        cb(rows);
    });
}

//TODO Hay un bug, la cantidad de veces que se activa la funcion genXLSX es igual a la cantidad de veces
// que se piden los reportes.

export const genOLAPLiLo = (data, cb) => {
    //console.log('Enviado genOLAPLiLo',data);
    socket.emit('genOLAPLiLo', data);
    socket.on('takeOLAPLiLo', rows => {
        cb(rows);
    });
}


export const genOLAPLLent = (data, cb) => {
    socket.emit('genOLAPLLent', data);
    socket.on('takeOLAPLLent', rows => {
        cb(rows);
    });
}


export const genOLAPMSAct = (data, cb) => {
    console.log('genOLAPMSAct', data);
    socket.emit('genOLAPMSAct', data);
    socket.on('takeOLAPMSAct', rows => {
        cb(rows);
    });
}


export const traeGrabaciones = (data) => {
    socket.emit('dameGrabaciones', data)
}

export const consumeGrabaciones = (cb) => {
    socket.on('tomaGrabaciones', rows => {
        //console.log('log en consumeEventosMT',rows);
        cb(rows);
    });
}


export const traeLLamadaPerdidas = (desde) => {
    socket.emit('getLLamadasPerdidas', desde)
}

export const consumeLLamadasPerdidas = (cb) => {
    socket.on('takeLLamadasPerdidas', rows => {
        //console.log('log en consumeLLamadasPerdidas', rows);
        cb(rows);
    });
}


export const traeLLamadaPerdidaSinDev = (desde) => {
    socket.emit('getNonReturnedLostCalls', desde)
}

export const consumeLLamadasPerdidasSinDev = (cb) => {
    socket.on('takeNonReturnedLostCalls', rows => {
        //console.log('log en consumeLLamadasPerdidasSinDev', rows);
        cb(rows);
    });
}

export const traeIncomingCalls = () => {
    socket.emit('getIncomingCalls');
}

export const consumeIncomingCalls = (cb) => {
    socket.on('takeIncomingCalls', rows => {
        //console.log('log en consumeIncomingCalls', rows);
        cb(rows);
    });
}


export const traeOutgoingCalls = () => {
    socket.emit('getOutgoingCalls');
}

export const consumeOutgoingCalls = (cb) => {
    socket.on('takeOutgoingCalls', rows => {
        //console.log('log en consumeOutgoingCalls', rows);
        cb(rows);
    });
}

export const traeZAS = (mes) => {
    socket.emit('getZAS', mes);
}

export const consumeZAS = (cb) => {
    socket.on('takeZAS', rows => {
        //console.log('log en consumeEventosMT',rows);
        cb(rows);
    });
}


export const traeZAD = () => {
    socket.emit('getZAD');
}

export const consumeZAD = (cb) => {
    socket.on('takeZAD', rows => {
        //console.log('log en consumeEventosMT',rows);
        cb(rows);
    });
}


export const traeClientes = () => {
    socket.emit('getClientes');
}

export const consumeClientes = (cb) => {
    socket.on('takeClientes', rows => {
        //console.log('log en consumeClientes',rows);
        cb(rows);
    });
}


export const traeDatosCliente = (id) => {
    console.log('Enviando  traeDatosCliente', id)
    socket.emit('getDatosCliente', id);
}

export const consumeDatosCliente = (cb) => {
    socket.on('takeDatosCliente', rows => {
        console.log('log en consumeDatosCliente', rows[0], rows[0].id);
        cb(rows[0]);
    });
}


export const traeContactosCliente = (id) => {
    console.log('Enviando  traeContactosCliente', id)
    socket.emit('getContactosCliente', id);
}

export const consumeContactosCliente = (cb) => {
    socket.on('takeContactosCliente', rows => {
        console.log('log en consumeContactos', rows);
        cb(rows);
    });
}



export const traeUsuariosCliente = (id) => {
    socket.emit('getUsuariosCliente', id);
}

export const consumeUsuariosCliente = (cb) => {
    socket.on('takeUsuariosCliente', rows => {
        console.log('log en consumeUsuariosCliente', rows[0], rows[0].id);
        cb(rows);
    });
}


export const traeZonasCliente = (id) => {
    socket.emit('getZonasCliente', id);
}

export const consumeZonasCliente = (cb) => {
    socket.on('takeZonasCliente', rows => {
        console.log('log en consumeZonasCliente', rows);
        cb(rows);
    });
}


export const traeNotasCliente = (id) => {
    socket.emit('getNotasCliente', id);
}

export const consumeNotasCliente = (cb) => {
    socket.on('takeNotasCliente', rows => {
        console.log('log en consumeNotasCliente', rows);
        cb(rows);
    });
}


export const traeOporCliente = (id) => {
    socket.emit('getOportCliente', id);
}

export const consumeOporCliente = (cb) => {
    socket.on('takeOportCliente', rows => {
        console.log('log en consumeOportCliente: ', rows);
        cb(rows);
    });
}
import { trae, consume } from '../../socket/cliente';
import { NOTES } from '../../socket/events';
import { SOCKET_SUBSCRIBE, SOCKET_REQUEST, NOTES_LOADED } from '../constants/actions'
import openSocket from 'socket.io-client';
const socket = openSocket('http://monitoreo.albiero.net:8000');

export const socketSubscriber = ({ dispatch }) => {
    return next => action => {
        const { type, payload } = action;
        if (type === SOCKET_SUBSCRIBE) {
            // console.log(`LLEGO SOCKET_SUBSCRIBE A CUSTOM MIDDLWARE con evento ${payload.event.get}`);
            if (payload.subtype === 'take') {
                socket.on(payload.event[payload.subtype], rows => {
                    // console.log(`Llego ${payload.event} con ${rows}`)
                    dispatch({ type: payload.event.trigger, payload: { rows: rows || [] } })
                })
            } else {
                socket.on(payload.event[payload.subtype], result => console.log(`Llego evento ${payload.event[payload.subtype]} con: `, result))
            }
        }
        return next(action);
    }
}

export const socketRequester = store => next => action => {
    const { type, payload } = action
    if (type === SOCKET_REQUEST) {
        // console.log(`LLEGA SOCKET_REQUEST A CUSTOMMIDDLEWARE con evento ${payload.event.get}`);
        socket.emit(payload.event[payload.subtype], payload.params);
    }
    return next(action);
}



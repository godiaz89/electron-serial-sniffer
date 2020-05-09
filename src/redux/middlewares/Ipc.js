import { LOAD_PORTS,PORTS_LOADED,START_SNIFFING,STOP_SNIFFING,PORT_DATA ,CLOSE_PAGE,MAXIMIZE,MINIMIZE} from '../constants/actions';
import {IPC_PORT_DATA,IPC_START_SNIFFING,IPC_STOP_SNIFFING,IPC_PORT_LIST,IPC_CLOSE,IPC_MAXIMIZE,IPC_MINIMIZE} from '../../constants/ipcEvents'
const {myIpc} = window;


export const IpcCommunication = ({ dispatch }) => {
    return next => action => {
        const { type, payload } = action;
        if (type === LOAD_PORTS) {
            myIpc.invoke(IPC_PORT_LIST).then(ports=>{
                dispatch({ type: PORTS_LOADED, payload:ports||[] })
            }).catch(e=>console.log)
        }

        if (type === START_SNIFFING) {
            myIpc.on(IPC_PORT_DATA,(e,...args)=>{
                // console.log('LLEGA IPC_PORT_DATA CON', args)
                let path = args[0];
                let data = args[1];
                dispatch({type:PORT_DATA,payload:{path,data}})
            })
            myIpc.send(IPC_START_SNIFFING,...payload);
        }

        if (type === STOP_SNIFFING) {
            myIpc.send(IPC_STOP_SNIFFING);
            myIpc.removeAllListeners(IPC_PORT_DATA);
        }

        if(type===CLOSE_PAGE){            
            myIpc.send(IPC_CLOSE)
        }

        if(type===MAXIMIZE){            
            myIpc.send(IPC_MAXIMIZE)
        }

        if(type===MINIMIZE){            
            myIpc.send(IPC_MINIMIZE)
        }

        return next(action);
    }
}

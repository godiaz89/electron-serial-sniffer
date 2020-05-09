import {PORTS_LOADED,LOAD_PORTS, UPDATE_PORT,START_SNIFFING, STOP_SNIFFING,CLEAN_PORT_DATA,
    MENU_CHANGE, MAXIMIZE,UNMAXIMIZE,MINIMIZE,CLOSE_PAGE} from '../constants/actions'


export const loadPorts=()=>{
    return {type:LOAD_PORTS}
}

// payload es el array de objetos COM
export const portsLoaded=(payload)=>{
    return {type:PORTS_LOADED,payload}
}

// payload es el nuevo objeto COM
export const updatePort=(payload)=>{
    return {type:UPDATE_PORT,payload}
}


//payload es un array con los paths de los coms a sniffear
export const startSniffing=(payload)=>{
    return {type:START_SNIFFING,payload}
}


export const stopSniffing=()=>{
    return {type:STOP_SNIFFING}
}

export const cleanSniffing=()=>{
    return {type:CLEAN_PORT_DATA}
}

export const changePageState=(payload)=>{
    return {type:MENU_CHANGE,payload}
}

export const maximizePage=()=>{
    return {type:MAXIMIZE}
}


export const unMaximizePage=()=>{
    return {type:UNMAXIMIZE}
}

export const minimizePage=()=>{
    return {type:MINIMIZE}
}

export const closePage=()=>{
    return {type:CLOSE_PAGE}
}
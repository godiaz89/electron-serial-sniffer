import { PORTS_LOADED, LOAD_PORTS, UPDATE_PORT,PORT_DATA,START_SNIFFING,STOP_SNIFFING, CLEAN_PORT_DATA } from "../constants/actions";


const INITIAL_STATE = {
    availablePorts: [],
    portsData:[],
    groupedData:{},
    isSniffing:false,
};


const DEFAULT_CONFIG={
    baudRate:9600,
    dataBits:8,
    stopBits:1,
    parity:'none',
    rtscts:false,
    xon:false,
    xoff:false,
    xany:false
}

const insertCOMLine=(path,data,groupedData)=>{
    if(groupedData[path]){return [...groupedData[path],data]}
    else{
        return [data]
    }
}

const SerialPorts = (state=INITIAL_STATE , action) => {
    const {type, payload} = action
    switch (type) {
        case PORTS_LOADED:
            return {...state, availablePorts:payload.map(r=>{return {...r,checked:false,...DEFAULT_CONFIG}})};
        case UPDATE_PORT:
            return {...state,availablePorts:state.availablePorts.map((p,i)=>state.availablePorts[i].path===payload.path?payload:p)}
        case PORT_DATA:
            let groupedResult = {groupedData:{...state.groupedData,[payload.path]:insertCOMLine(payload.path,payload.data,state.groupedData) } }
            let result = {portsData:[...state.portsData, {path:payload.path,data:payload.data}] }
            // console.log(result)
            return {...state,...result,...groupedResult}
        case START_SNIFFING:
            return {...state,isSniffing:true}
        case STOP_SNIFFING:
            return {...state,isSniffing:false}
        case CLEAN_PORT_DATA:
            return {...state,portsData:[],groupedData:{}}
        default:
            return state;
    }
};

export default SerialPorts;
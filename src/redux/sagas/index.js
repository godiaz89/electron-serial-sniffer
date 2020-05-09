import {call,put,takeEvery, all} from 'redux-saga/effects';
import {SOCKET_SUBSCRIBE, SOCKET_REQUEST} from '../constants/actions';
import {consume,trae} from '../../socket/cliente';


const subscribeEvent=(payload)=>{
    console.log('LLEGAMOS A subscribeEvents CON ',payload.event);
    consume(payload.event.take, rows=>rows);
}


function* watcherSubscribe(){
    yield takeEvery(SOCKET_SUBSCRIBE,workerSubscribe)
}



function* workerSubscribe(action){
    try {
        const rows=yield call(subscribeEvent,action.payload)
        yield put({ type: action.payload.event.trigger, payload:{rows:rows||[]} });
    } catch (error) {
        console.log('Error en workerSubscribe', error);
    }
}




// const requestEvent=(payload)=>{
//     trae(payload.event.get,payload.params||1);
// }


// function* watcherRequest(){
//     yield takeEvery(SOCKET_REQUEST,workerRequest)
// }



// function* workerRequest(action){
//     try {
//         const rows=yield call(requestEvent,action.payload)
//         yield put({ type: action.payload.event.trigger, payload:{rows:rows} });
//     } catch (error) {
//         console.log('Error en workerSubscribe', error);
//     }
// }



export default function* rootSaga(){
    yield all([watcherSubscribe()]);
}
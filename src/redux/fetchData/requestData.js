
import {requestEvent} from '../actions'
import {NOTES,OPERADOR,AVAYAUSERS} from '../../socket/events'

export const  requestNotesAndUsers = ()=>{
    requestEvent({ event: NOTES, subtype: 'get', params: 1 });
    requestEvent({ event: OPERADOR, subtype: 'get', params: 1 })
}

export const requestAvayaUsers = ()=>{
    requestEvent({event:AVAYAUSERS,subtype:'get',params:1});
}
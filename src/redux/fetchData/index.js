import {requestAvayaUsers, requestNotesAndUsers} from './requestData'
import {subscribeAvayaUsers,subscribeNotesAndUsers} from './subscribetoData'

export const subscribeToData=()=>{
    subscribeNotesAndUsers();
    subscribeAvayaUsers();
}

export const requestData=()=>{
    requestNotesAndUsers();
    requestAvayaUsers();
}
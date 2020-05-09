
import { subscribeEvent } from '../actions'
import { NOTES, OPERADOR, AVAYAUSERS } from '../../socket/events'

export const subscribeNotesAndUsers = () => {
    subscribeEvent({ event: NOTES, subtype: 'take' });
    subscribeEvent({ event: NOTES, subtype: 'success' });
    subscribeEvent({ event: NOTES, subtype: 'error' });

    //operadores para novedades
    subscribeEvent({ event: OPERADOR, subtype: 'take' });
    subscribeEvent({ event: OPERADOR, subtype: 'success' });
    subscribeEvent({ event: OPERADOR, subtype: 'error' });
}

export const subscribeAvayaUsers=()=>{
    subscribeEvent({ event: AVAYAUSERS, subtype: 'take' })
}



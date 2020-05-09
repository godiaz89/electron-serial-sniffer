import {MENU_CHANGE} from '../constants/actions'
import {DASHBOARD,CONFIG} from '../constants/menus'
const INITIAL_STATE={
    showConfig:true
}


const PageState = (state=INITIAL_STATE , action) => {
    const {type, payload} = action
    switch (type) {
        case MENU_CHANGE:
            return {...state,showConfig:payload}
        default:
            return state;
    }
};

export default PageState;
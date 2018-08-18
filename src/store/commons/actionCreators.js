import http from '../../modules/http'
import {
    CHANGE_USER_STATE,
    CHANGE_MENU_CONFIG
} from './const'
const actionCreators = {
    get_initial_user_state (callback) {
        if (!sessionStorage.user_state)
        callback();
        let user_state = JSON.parse(sessionStorage.user_state || '{}')
        return {type: CHANGE_USER_STATE, user_state}
    },
    login ( { username, password, success, fail } ) {
        return dispatch => {
            // 这里调用backend api
            http.ajax({
                url: '/api/login.json',
                params: { username, password }
            }).then (res => {
                console.log('res',res)
                let action = { type:CHANGE_USER_STATE, user_state: res }
                sessionStorage.user_state = JSON.stringify(res)
                dispatch( action )
                if (success) success();
            }).catch(error => {
                console.log('error',error)
                if (fail) fail();
            })
        }
    },
    get_menu_config(){
        return dispatch => {
            console.log(111111)
        }
    }
    
}
export default actionCreators
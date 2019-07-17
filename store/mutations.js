import {
    SHOWLOGIN,
    UPDATETOKEN,
    UPDATEUSERINFOR,
    UPDATEACCESSTOKEN,
    UPDATEONLINESTATUS,
    UPDATESEARCHINFO
} from './mutation_type';
import utils from '../assets/js/utils';

export default {
    [SHOWLOGIN](state, value) {
        state.showLoginBox = value;
        if (value) {
            document.body.style.height = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'auto';
            document.body.style.overflow = 'auto';
        }
    },
    [UPDATETOKEN](state, value) {
        state.hasToken = value;
        state.showLoginBox = !value;
    },
    [UPDATEUSERINFOR](state, userinfo) {
        state.userInfo = userinfo;
    },
    [UPDATEONLINESTATUS](state, status) {
        state.userInfo.online_status = status;
        console.log(state.userInfo.online_status);
        utils.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    [UPDATEACCESSTOKEN](state, obj) {
        console.log('UPDATEACCESSTOKEN', obj);
        //state.access_token = token;
        if (Object.prototype.toString.call(obj).slice(8, -1) == 'Object') {
            //state.access_token = 'USERID ' + utils.base64encode('web:' + obj.access_token + ':' + obj.user_id)
            state.access_token = obj.access_token;
        } else {
            state.access_token = obj;
        }
        utils.setItem('access_token', state.access_token);
    },
    [UPDATESEARCHINFO](state, obj) {
        state.searchInfo = obj;
    }
};

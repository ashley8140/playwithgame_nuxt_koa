import {
    SHOWLOGIN,
    UPDATETOKEN,
    UPDATEUSERINFOR,
    UPDATEDEFAULTKEY,
    UPDATEACCESSTOKEN,
    UPDATEONLINESTATUS,
    UPDATESEARCHINFO
} from './mutation_type';
import utils from '../assets/js/utils';

export default {
    [UPDATEDEFAULTKEY](state, v) {
        state.defaultkey = v;
    },
    [SHOWLOGIN](state, value) {
        state.showLoginBox = value;
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
    [UPDATEACCESSTOKEN](state, token) {
        state.access_token = token;
        // if (Object.prototype.toString.call(obj).slice(8, -1) == 'Object') {
        //     state.access_token = 'USERID ' + utils.base64encode('web:' + obj.access_token + ':' + obj.user_id)
        // } else {
        //     state.access_token = obj;
        // }
        console.log('update access_token');
    },
    [UPDATESEARCHINFO](state, obj) {
        state.searchInfo = obj;
    }
};

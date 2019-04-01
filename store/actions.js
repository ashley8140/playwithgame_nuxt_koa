import utils from '../assets/js/utils';

export default {
    loginOut({commit, state}){
        utils.removeItem('userInfo');
        commit('UPDATETOKEN', false);
    }
}
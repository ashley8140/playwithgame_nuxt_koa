import utils from '../assets/js/utils';
export const state = () => ({
    assess_token: null,
    userInfo: null,
    searchInfo: []
});
export const mutations = {
    updateLoginBoxStatus(state, value) {
        state.showLoginBox = value;
        if (value) {
            document.body.style.height = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'auto';
            document.body.style.overflow = 'auto';
        }
    },
    logout(state) {
        utils.removeItem('userInfo');
        utils.removeItem('access_token');
        state.userInfo = null;
        state.access_token = null;
        state.showLoginBox = true;
    },
    updateUserInfo(state, userInfo) {
        state.userInfo = userInfo;
        utils.setItem('userInfo', JSON.stringify(userInfo));
    },
    updateOnlineStatus(state, status) {
        state.userInfo.online_status = status;
        console.log(state.userInfo.online_status);
        utils.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    updateToken(state, token) {
        console.log(' updateToken=>', token);
        state.access_token = token;
        utils.setItem('access_token', token);
    },
    updateSearchInfo(state, obj) {
        state.searchInfo = obj;
    }
};
export const actions = {};

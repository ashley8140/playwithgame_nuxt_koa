import utils from '../assets/js/utils'
export const state = () => ({
    access_token: null,
    userInfo: {},
    searchInfo: [],
    showLoginBox: false,
    showUserInfo: false
})
export const mutations = {
    updateShowUserInfo(state, value) {
        state.showUserInfo = value
    },
    updateLoginBoxStatus(state, value) {
        state.showLoginBox = value
        if (process.browser) {
            if (value) {
                document.body.style.height = '100%'
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.height = 'auto'
                document.body.style.overflowY = 'auto'
            }
        }
    },
    logout(state) {
        state.userInfo = {}
        state.access_token = null
        state.showLoginBox = true
    },
    updateUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    updateOnlineStatus(state, status) {
        state.userInfo.online_status = status
    },
    updateToken(state, token) {
        state.access_token = token
    },
    updateSearchInfo(state, obj) {
        state.searchInfo = obj
    }
}
export const actions = {}

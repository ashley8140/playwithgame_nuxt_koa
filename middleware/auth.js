export default ({ store, redirect, route }) => {
    console.log('path=>', route.path)
    if (route.path === '/userCenter') {
        redirect('/userCenter/order')
    } else if (!store.state.login.access_token) {
        redirect('/')
        store.commit('login/updateLoginBoxStatus', true)
    }
}

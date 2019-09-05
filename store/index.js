import ajax from '@/assets/js/axios'
export const state = () => ({})
export const mutations = {}
export const actions = {
    //nuxtServerInit页面渲染前处理store
    async nuxtServerInit(
        { commit, getters, dispatch, state },
        { req, res, app }
    ) {
        const token = req.ctx.cookies.get('access_token')
        if (token) {
            commit('login/updateToken', token)
            app.$axios.setHeader('Authorization', token)
            try {
                let { data } = await app.$axios.get('/Auth/user')
                if (data.code == 200) {
                    commit('login/updateUserInfo', data.userInfo)
                }
            } catch (err) {
                console.log('err=>', err)
            }
        }
    }
}

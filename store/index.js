import ajax from '@/assets/js/axios';
export const state = () => ({});
export const mutations = {};
export const actions = {
    //nuxtServerInit页面渲染前处理store
    async nuxtServerInit({ commit, getters, dispatch, state }, { req, res }) {
        console.log('nuxtServerInit');
        const token = req.ctx.cookies.get('access_token');
        if (token) {
            commit('login/updateToken', token);
            await ajax
                .get('/Auth/user', {
                    headers: {
                        token: token
                    }
                })
                .then(data => {
                    if (data.code == 200) {
                        commit('login/updateUserInfo', data.userInfo);
                    }
                });
            // 获取用户信息
        }
    }
};

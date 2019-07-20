export const state = () => ({});
export const mutations = {};
export const actions = {
    //nuxtServerInit页面渲染前处理store
    async nuxtServerInit({ commit, getters, dispatch, state }, { req, res }) {
        const token = req.ctx.cookies.get('access_token');
        console.log(token);
    }
};

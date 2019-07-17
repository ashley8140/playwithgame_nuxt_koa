import utils from '../assets/js/utils';

export default ({ app }) => {
    let store = app.store;
    app.router.beforeEach((to, from, next) => {
        if (process.client) {
            console.log('isClient');
            let access_token = utils.getItem('access_token');
            let free = [
                //不需要权限的路由
                'index',
                'findPeople',
                'appDownload',
                'hunterTips',
                'rechargeTips',
                'hunterInfo'
            ];
            //console.log('app=>', app);

            //console.log('vue1=>', app.router.app);
            if (free.indexOf(to.name) == -1 && !access_token) {
                console.log('to.name', to.name);
                app.router.app.$toast.error('您还没有登录');
                store.commit('SHOWLOGIN', true);
                //console.log('app=>', app);
                console.log('vue1=>', app.router.app);
                next('/');
            } else {
                next();
            }
        }
    });
};

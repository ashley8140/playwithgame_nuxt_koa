import utils from '../assets/js/utils';
import toast from '../components/toast';

export default function({ $axios, redirect }) {
    $axios.defaults.timeout = 30000;
    $axios.defaults.auth = true;
    if (process.browser) {
        $axios.setToken(utils.getItem('access_token'));
    }
    $axios.onRequest(config => {});

    /* 
    $axios.interceptors.request.use(
        config => {
            console.log('config=>', config);

            return config;
        },
        err => {
            return Promise.reject(err);
        }
    ); */
    /*   $axios.interceptors.response.use(
        res => {
            if (res.config.auth && res.data.code == 401) {
                //token过期
                store.commit('UPDATETOKEN', false);
            }
            return res;
        },
        err => {
            var config = err.config;
            if (!config || !config.retry) {
                const errorMsg = err.toString();
                if (errorMsg.includes('timeout')) {
                    toast('请求超时');
                }
                return Promise.reject(err);
            }
            return Promise.reject(err);
        }
    ); */
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/400');
        }
    });
}

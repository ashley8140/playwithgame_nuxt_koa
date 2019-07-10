import utils from '../assets/js/utils';
import toast from '../components/toast';
let access_token = utils.getItem('access_token');
console.log('access_token=>', access_token);

export default function({ $axios, redirect }) {
    !!access_token &&
        ($axios.defaults.headers.common['authentication'] = access_token);
    $axios.defaults.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded';
    $axios.defaults.timeout = 30000;
    $axios.defaults.loading = false;
    $axios.defaults.auth = true;
    // $axios.onRequest(config => {
    //     console.log('axios config=>', config);
    // });
    // $axios.onError(error => {
    //     const code = parseInt(error.response && error.response.status);
    //     if (code === 400) {
    //         redirect('/400');
    //     }
    // });
    let pending = [];
    let cancelToken = $axios.CancelToken;
    let removePending = config => {
        for (let p in pending) {
            if (
                pending[p].u ===
                config.url + '&' + config.method + '&' + config.data
            ) {
                pending[p].f(); //取消
                pending.splice(p, 1); //移除
            }
        }
    };

    $axios.interceptors.request.use(
        config => {
            console.log('config=>', config);
            removePending(config);
            config.cancelToken = new cancelToken(c => {
                //用请求地址&请求方式拼接的字符串
                pending.push({
                    u: config.url + '&' + config.method + '&' + config.data,
                    f: c
                });
            });
            if (config.loading) {
            }
            return config;
        },
        err => {
            return Promise.reject(err);
        }
    );
    $axios.interceptors.response.use(
        res => {
            removePending(res.config); //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
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
    );
}

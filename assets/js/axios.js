import axios from 'axios';
import Vue from 'vue';

const isServer = Vue.prototype.$isServer || process.server;
const baseURL = isServer
    ? `${process.env.DOMAIN}/v1`
    : `${window.location.origin}/v1`;

const ajax = axios.create({
    baseURL,
    responseType: 'json',
    withCredentials: true //允许跨站带cookie
});

ajax.interceptors.response.use(
    res => {
        const { data } = res;
        if (data && !isServer && data.code !== 200) {
            Vue.prototype.$toast.error(d.message);
        }
        return data;
    },
    error => Promise.reject(error)
);

export default ajax;

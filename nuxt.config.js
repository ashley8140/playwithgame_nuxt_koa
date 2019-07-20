const pkg = require('./package');
import config from './server/config';
process.env.DOMAIN = config.app.domain;
module.exports = {
    mode: 'universal',
    head: {
        title: '约玩_游戏陪玩_妹子陪玩_大神陪玩_导师陪玩',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },

    /*
     ** Global CSS
     */
    css: [
        '~assets/css/init.scss',
        {
            src: 'swiper/dist/css/swiper.css'
        }
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: '@/plugins/toast',
            ssr: false
        },
        {
            src: '@/plugins/axios',
            ssr: true
        }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        prefix: '/v1/',
        retry: { retries: 3 },
        proxy: true,
        credentials: true //跨域请求时是否需要凭证
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    router: {
        linkActiveClass: 'navIsActive'
        //extendRoutes: routes
        //middleware: ['authorities']
    }
};

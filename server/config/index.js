const path = require('path');
const isPro = process.env.NODE_ENV === 'production';
export default {
    debug: true,
    mongodb: {
        host: '127.0.0.1',
        database: 'playwithgame',
        port: 27017,
        user: '',
        pass: ''
    },
    app: {
        domain: isPro ? 'http://59.110.136.104/' : 'http://127.0.0.1:5001'
    },
    redis: {
        get host() {
            return '127.0.0.1';
        },
        get port() {
            return 6379;
        }
    },
    jwt: {
        secret: 'ashley8140',
        expiresIn: '24h'
    },
    log_dir: path.join(__dirname, 'logs'),
    wx: {},
    qq: {},
    seo: {}
};

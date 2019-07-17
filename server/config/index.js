const path = require('path');
export default {
    debug: true,
    ENV: process.env.NODE_ENV || 'development',
    dbs: 'mongodb://127.0.0.1:27017/playwithgame',
    redis: {
        get host() {
            return '127.0.0.1';
        },
        get port() {
            return 6379;
        }
    },
    log_dir: path.join(__dirname, 'logs'),
    WX_OAUTH: {}
};

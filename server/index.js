require('colors');
require('./models');
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import session from 'koa-session2';
import requestLog from './middleware/request_log';
import catchError from './middleware/exceptions';
import InitManager from './common/init';
require('./middleware/mongoose_log');
const Koa = require('koa');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = new Koa();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

app.keys = ['ashley8140']; //加密cookie
app.proxy = true; //当 app.proxy 设置为 true 时，支持 X-Forwarded-Host

app.use(catchError);
app.use(requestLog);

app.use(bodyParser());
app.use(json()); //自动将我们返回的数据转换为json格式。
const session_config = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true, //signed设为true的时候，会自动给cookie加上一个sha256的签名 koa:session.sig
    rolling: false,
    renew: false
};
//当给session赋值时，koa-session会将session值加密并设置成cookie
app.use(session(session_config));

//app.use(auth.authUser) //验证用户是否登录

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config);

    const {
        host = process.env.HOST || '127.0.0.1',
        port = process.env.PORT || 3000
    } = nuxt.options.server;

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }
    //配置路由
    InitManager.initCore(app);
    app.use(ctx => {
        ctx.status = 200;
        ctx.respond = false; // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        ctx.req.session = ctx.session;
        nuxt.render(ctx.req, ctx.res);
    });

    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}

start();

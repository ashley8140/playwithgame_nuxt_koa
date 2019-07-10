import mongoose from 'mongoose';
import color from 'colors';
import dbConfig from './config';
//import session from 'koa-session';
//import redis from 'koa-redis';

import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import passport from './middleware/passport';
import jwt from 'jsonwebtoken';
import { accessLogger, logger } from './common/logger';
import requestLog from './middleware/request_log';
require('./middleware/mongoose_log');

import * as auth from './middleware/auth';

import home from './api/v1/home';
import Auth from './api/v1/Auth';

const Koa = require('koa');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = new Koa();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

app.keys = ['playwithgame'];
app.proxy = true; //当 app.proxy 设置为 true 时，支持 X-Forwarded-Host
//app.use(requestLog);
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        logger.error(err);
        ctx.body = {
            code: 500,
            message: err.message
        };
    }
});
app.use(requestLog);
//登录成功之后可以把用户信息存入session中。koa-session2会将sessionId写入cookie，
//再把session对象写入redis,键值为sessionID，这样每次客户端的请求带上sessionID我们就可以从redis中取登录用户信息。
//也可以通过是否有sessionID来做会话拦截。
//退出的时候只要将ctx.session置为{}就可以了。
// app.use(
//     session(
//         {
//             key: 'koa:sess', // 默认
//             maxAge: 86400000, //  cookie的过期时间 默认为一天
//             overwrite: true, //
//             httpOnly: true,
//             signed: true,
//             rolling: true, //** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false
//             renew: false, //** (boolean) renew session when session is nearly expired
//             store: new redis()
//         },
//         app
//     )
// );
//当我们没有写store的时候，默认即利用cookie实现session。
app.use(bodyParser());
app.use(json()); //自动将我们返回的数据转换为json格式。

//连接mongodb
mongoose
    .connect(dbConfig.dbs, {
        poolSize: 20,
        useCreateIndex: true,
        useNewUrlParser: true //useNewUrlParser这个属性会在url里识别验证用户所需的db，未升级前是不需要指定的，升级到一定要指定，不管是在url后面，还是用authSource
    })
    .then(
        () => {},
        err => {
            logger.error('connect to %s error: ', dbConfig.db, err.message);
            process.exit(1);
        }
    );
// passport 配置
app.use(passport.initialize()); //initialzie()函数的作用是只是简单为当前context添加passport字段，便于后面的使用。而
app.use(passport.session()); //passport.session()则是passport自带的策略，用于从session中提取用户信息

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
    app.use(home.routes()).use(home.allowedMethods());
    app.use(Auth.routes()).use(Auth.allowedMethods());
    app.use(ctx => {
        ctx.status = 200;
        ctx.respond = false; // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res);
    });

    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}

start();

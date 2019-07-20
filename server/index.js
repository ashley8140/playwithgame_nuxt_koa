require('colors');
require('./models');
require('./middleware/mongoose_log');
const path = require('path');
const koaBody = require('koa-body');
const json = require('koa-json');
const session = require('koa-session2');
const cors = require('koa2-cors');
const Koa = require('koa');
const { Nuxt, Builder } = require('nuxt');
const consola = require('consola');
import requestLog from './middleware/request_log';
import catchError from './middleware/exceptions';
import InitManager from './common/init';
import myConfig from './config';
const app = new Koa();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

app.keys = ['ashley8140']; //加密cookie
app.proxy = true; //当 app.proxy 设置为 true 时，支持 X-Forwarded-Host

app.use(catchError);
app.use(requestLog);

app.use(cors({ origin: myConfig.app.domain, credentials: true }));
app.use(
    koaBody({
        multipart: true, //支持文件上传
        jsonLimit: '50mb',
        urlencoded: true,
        formidable: {
            uploadDir: path.join(__dirname, 'public/upload/'), //文件上传目录
            keepExtensions: true, //保持文件后缀
            maxFieldsSize: 2 * 1024 * 1024, //文件上传大小
            onFileBegin: (name, file) => {
                //文件上传前的设置
            }
        }
    })
);
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

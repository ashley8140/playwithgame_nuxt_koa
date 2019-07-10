import { accessLogger } from '../common/logger';
const ignore = /(.jpg|.png|.js|.css|client)$/;

export default async (ctx, next) => {
    /* 
        ctx.res是node的request对象
        绕过 Koa 的 response 处理是 不被支持的. 应避免使用以下 node 属性：
        res.statusCode
        res.writeHead()
        res.write()
        res.end()
*/
    if (ignore.test(ctx.url)) {
        //过滤一些静态资源的请求
        await next();
        return;
    }
    var t = new Date();
    accessLogger.info(
        '\n\nStarted',
        t.toISOString(),
        ctx.method,
        ctx.url,
        ctx.ip
    );
    //console.log('request url=>', ctx.url);
    await next();
    var duration = new Date() - t;
    accessLogger.info('Completed', ctx.status, ('(' + duration + 'ms)').green);
};

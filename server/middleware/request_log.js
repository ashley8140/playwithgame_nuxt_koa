import logger from '../common/logger';
const ignore = /^\/(static|agent)/;

export default (ctx, next) => {
    // Assets do not out log.
    if (ignore.test(ctx.url)) {
        next();
        return;
    }
    /* 
    ctx.res是node的request对象
   绕过 Koa 的 response 处理是 不被支持的. 应避免使用以下 node 属性：

    res.statusCode
    res.writeHead()
    res.write()
    res.end()
 */
    const t = new Date();
    logger.info('\n\nStarted', t.toISOString(), ctx.method, ctx.url, ctx.ip);

    ctx.request.end(() => {
        const duration = new Date() - t;

        logger.info('Completed', ctx.status, ('(' + duration + 'ms)').green);
    });

    next();
};

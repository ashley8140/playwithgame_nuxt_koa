const catchError = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        logger.error(error);
        if (error.errorCode) {
            ctx.body = {
                message: error.msg,
                code: error.code,
                request: `${ctx.method} ${ctx.path}`
            };
        } else {
            ctx.body = {
                code: '-1',
                message: '操作出现错误'
            };
        }
    }
};
export default catchError;

const catchError = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        logger.error(error);
        if (error.errorCode) {
            ctx.body = {
                message: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            };
        } else {
            ctx.body = {
                msg: 'we made a mistake'
            };
        }
    }
};
export default catchError;

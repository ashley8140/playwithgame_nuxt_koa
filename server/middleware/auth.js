const jwt = require('jsonwebtoken');
import config from '../config';

// 验证用户是否登录
export const checkAuth = async (ctx, next) => {
    const token = ctx.headers.token;
    try {
        jwt.verify(token, config.jwt.secret);
        next();
    } catch (err) {
        logger.error(err);
        ctx.body = { code: -1, message: 'token无效' };
    }
};

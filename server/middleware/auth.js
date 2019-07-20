import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

//用户验证

//需要登录
export const userRequired = (ctx, next) => {};
// 验证用户是否登录
export const authUser = async (ctx, next) => {
    let token = ctx.request.get('Authorization');
    //console.log('output: authUser -> token', token);
    // let cert = fs.readFileSync(
    //     path.resolve(__dirname, '../config/jwt_pub.pem')
    // );
    try {
        const decoded = await jwt.verify(token, config.jwt.secret);
        console.log('output: authUser -> decoded', decoded);
        next();
    } catch (e) {
        const err = new ERRORS.AuthFailed('请登陆', 10003, 400);
        throw err;
    }
};

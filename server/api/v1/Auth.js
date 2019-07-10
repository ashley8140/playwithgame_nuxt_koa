import Router from 'koa-router';
import passport from '../../middleware/passport';
import UserModel from '../../models/user';
import * as userProxy from '../../proxy/user';
import jwt from 'jsonwebtoken';
import config from '../../config';
import EventProxy from 'eventproxy';
import { logger } from '../../common/logger';

let router = new Router({
    prefix: '/v1/Auth'
});
router.post('/sendPhoneCode', async (ctx, next) => {
    // 模拟发送短信验证码
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 1000);
    });
    let re = await promise;
    ctx.body = {
        code: 200,
        message: '暂未接入短信平台,请填写123456'
    };
});
router.post('/phoneLogin', async (ctx, next) => {
    const mobile = ctx.request.body.mobile;
    let err, userInfo;
    [err, userInfo] = await userProxy.getUserByMobile(mobile);
    if (err) {
        logger.error(err);
        ctx.body = { code: -1, message: '登录失败' };
    }
    if (!userInfo) {
        let user_id;
        [err, user_id] = await userProxy.getUserNum();
        if (err) {
            logger.error(err);
            ctx.body = { code: -1, message: '登录失败' };
        }
        //console.log('user_id=>', user_id);
        [err, userInfo] = await userProxy.createNewUser({
            user_id: user_id + 1,
            mobile: mobile
        });
        if (err) {
            logger.error(err);
            ctx.body = { code: -1, message: '登录失败' };
        }
        //console.log('_id=>', userInfo._id);
        let token = jwt.sign({ data: userInfo._id }, config.secret, {
            expiresIn: '24h'
        });
        [err, userInfo] = await userProxy.saveToken(userInfo._id, token);
        if (err) {
            logger.error(err);
            ctx.body = { code: -1, message: '登录失败' };
        }
    }
    ctx.body = {
        code: 0,
        message: '登录成功',
        data: userInfo
    };
    //let token;
    // [err, token] = await new Promise((resolve, reject) => {
    //     jwt.sign(
    //         { data: userInfo.id },
    //         config.secret,
    //         { expiresIn: '24h' },
    //         (err, token) => {
    //             if (err) {
    //                 logger.error(err);
    //                 reject(err);
    //             }
    //             resolve([err, token]);
    //         }
    //     );
    // }).catch(err => [err]);
    // if (err) {
    //     ctx.body = { code: -1, message: '登录失败' };
    // }

    // ctx.body = {
    //     code: 0,
    //     message: '登录成功',
    //     data: Object.assign(userInfo, {
    //         token: { access_token: token }
    //     })
    // };
});
/* router.post('/phoneLogin', (ctx, next) => {
    return passport.authenticate('local', async (err, user, info, status) => {
        console.log('authenticate=>', err, user, info, status);
        if (err) {
            await next(err);
        } else {
            if (user) {
                ctx.body = {
                    code: 0,
                    message: '登录成功',
                    data: user
                };
                return ctx.login(user);
            } else {
                ctx.body = {
                    code: -1,
                    message: info.message
                };
            }
        }
    })(ctx, next);
}); */
export default router;

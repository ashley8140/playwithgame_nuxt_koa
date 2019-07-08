import Router from 'koa-router';
import passport from '../../middleware/passport';
import UserModel from '../../models/user';
import * as User from '../../proxy/user';

//import eventproxy from 'eventproxy'

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
router.post('/phoneLogin', (ctx, next) => {
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
});
export default router;

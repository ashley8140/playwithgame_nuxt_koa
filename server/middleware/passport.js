import UserModel from '../models/user';
import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import * as userProxy from '../proxy/user';
//import { logger } from '../common/logger';

// 序列化，存储session，用于自动登录,ctx.login()触发
passport.serializeUser((user, done) => {
    console.log('serializeUser=>', user);
    done(null, user);
});

// 反序列化
passport.deserializeUser((user, done) => {
    console.log('deserializeUser=>', user);
    done(null, user);
});
passport.use(
    new LocalStrategy(
        {
            usernameField: 'mobile',
            passwordField: 'yzm'
        },
        async (mobile, yzm, done) => {
            if (yzm != '123456') {
                return done(null, false, { message: '验证码错误' });
            }
            let [err, userInfo] = await userProxy.getUserByMobile(mobile);

            if (!userInfo) {
                [err, userInfo] = await userProxy.createNewUser({
                    mobile: mobile
                });
            }
            if (err) {
                logger.error(err);
                return done(null, false, { message: err });
            }

            done(null, userInfo);
        }
    )
);

export default passport;

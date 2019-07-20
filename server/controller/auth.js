import { generateToken } from '../common/utils';
import config from '../config';
import { logger } from '../common/logger';
const mongoose = require('mongoose');
const userModel = mongoose.model('User');
export const phoneLogin = async (ctx, next) => {
    const mobile = ctx.request.body.mobile;
    const yzm = Number(ctx.request.body.yzm);
    let err, userInfo;
    if (yzm !== 123456) {
        err = new ERRORS.ParameterException('验证码错误', 10001, 400);
        throw err;
    }
    try {
        userInfo = await userModel.findOne({ mobile: mobile });
        if (!userInfo) {
            userInfo = await userModel.create({
                mobile: mobile
            });
        }
    } catch (error) {
        logger.error(error);
        err = new ERRORS.HttpException('登录失败', 10000, 400);
        throw err;
    }
    //生成token
    const token = generateToken(userInfo._id);
    //console.log('token=>', token);
    ctx.cookies.set('access_token', token, {
        maxAge: config.jwt.expiresIn * 1000,
        httpOnly: true
    });
    ctx.body = {
        code: 200,
        message: '登录成功',
        userInfo: userInfo,
        access_token: token
    };
};

export const sendPhoneCode = async (ctx, next) => {
    // 模拟发送短信验证码

    ctx.body = {
        code: 200,
        message: '暂未接入短信平台,请填写123456'
    };
};
export const logout = async (ctx, next) => {
    ctx.cookies.set('access_token', null);
    ctx.session = {};
    ctx.body = {
        code: 200
    };
};

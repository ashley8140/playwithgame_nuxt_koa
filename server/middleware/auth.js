//用户验证

//需要登录
export const userRequired = (ctx, next) => {};
// 验证用户是否登录
export const authUser = (ctx, next) => {
    console.log('isAuthenticated=>', ctx.isAuthenticated());
};

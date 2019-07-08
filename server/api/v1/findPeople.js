import Router from 'koa-router';
import game from '../mockdata/findPeople/game';
import wzry from '../mockdata/findPeople/wzry';
import yxlm from '../mockdata/findPeople/yxlm';
import cjzc from '../mockdata/findPeople/cjzc';
import hyxd from '../mockdata/findPeople/hyxd';
import jdqs from '../mockdata/findPeople/jdqs';
import qjcj from '../mockdata/findPeople/qjcj';
let gameInfo = {
    wzry: wzry,
    yxlm: yxlm,
    cjzc: cjzc,
    hyxd: hyxd,
    jdqs: jdqs,
    qjcj: qjcj
};
let router = new Router({
    prefix: '/api/'
});
let key = 'wzry';
let pageSize = 12;
router.get('lists', async (ctx, next) => {
    if (ctx.query.game) {
        key = ctx.query.game;
    }
    if (ctx.query.game && key != 'wzry') {
        ctx.body = {
            code: 200,
            message: 'success',
            data: {
                key: key,
                game: game,
                tags: gameInfo[key].tags,
                info: [],
                info_pages: 0
            }
        };
    }
    if (!ctx.query.game || key == 'wzry') {
        var page = parseInt(ctx.query.page);
        var info_pages = Math.ceil(gameInfo[key].info.length / pageSize);
        var info = [];
        if (page == info_pages) {
            info = gameInfo[key].info.slice((page - 1) * pageSize);
        } else if (page < info_pages) {
            info = gameInfo[key].info.slice(
                (page - 1) * pageSize,
                page * pageSize
            );
        } else if (page > info_pages) {
            info = [];
        }
        ctx.body = {
            code: 200,
            message: 'success',
            data: {
                key: key,
                game: game,
                tags: gameInfo[key].tags,
                info: info,
                info_pages: info_pages
            }
        };
    }
});

export default router;

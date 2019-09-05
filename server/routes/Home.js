//首页
import Router from 'koa-router'
import * as homeController from '../controller/home'
import { checkAuth } from '../middleware/auth'
let router = new Router({
    prefix: '/v1/index'
})
//首页数据
router.get('/index', homeController.homeData)
//找陪玩陪玩者列表
router.get('/lists', homeController.listData)

export default router

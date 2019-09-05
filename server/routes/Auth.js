import Router from 'koa-router'
import { checkAuth } from '../middleware/auth'

import * as AuthControllers from '../controller/auth'

const router = new Router({
    prefix: '/v1/Auth'
})

router.post('/sendPhoneCode', AuthControllers.sendPhoneCode)
router.post('/phoneLogin', AuthControllers.phoneLogin)
router.post('/logout', AuthControllers.logout)
router.get('/user', checkAuth, AuthControllers.getUser)
export default router

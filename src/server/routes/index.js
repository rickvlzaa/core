import { Router } from 'express'
import { sendAppPage } from '../controllers'
import { asyncMiddleware } from '../../utils'
import App from '../../client/App'


const router = Router()

router.use(asyncMiddleware(sendAppPage(App)))

export default router
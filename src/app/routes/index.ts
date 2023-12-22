import { Router } from 'express'
import { AuthRouter } from '../modules/auth/auth.route'
import { UserRouter } from '../modules/user/user.route'

const route = Router()

route.use('/auth', AuthRouter)
route.use('/users', UserRouter)

export const AppRouter = route

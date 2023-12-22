import { Router } from 'express'
import { AuthRouter } from '../modules/auth/auth.route'
import { QuizRouter } from '../modules/quiz/quiz.route'
import { UserRouter } from '../modules/user/user.route'

const route = Router()

route.use('/auth', AuthRouter)
route.use('/users', UserRouter)
route.use('/quizzes', QuizRouter)

export const AppRouter = route

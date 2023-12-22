import { Router } from 'express'
import { AuthRouter } from '../modules/auth/auth.route'
import { CategoryRouter } from '../modules/category/category.route'
import { PerformanceRouter } from '../modules/performance/performance.route'
import { QuizRouter } from '../modules/quiz/quiz.route'
import { UserRouter } from '../modules/user/user.route'

const route = Router()

route.use('/auth', AuthRouter)
route.use('/users', UserRouter)
route.use('/quizzes', QuizRouter)
route.use('/categories', CategoryRouter)
route.use('/performances', PerformanceRouter)

export const AppRouter = route

import { Router } from 'express'
import { QuizController as controller } from './quiz.controller'

const router = Router()

router.post('/', controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', controller.updateData)
router.delete('/:id', controller.deleteData)

export const QuizRouter = router

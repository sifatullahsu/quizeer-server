import { Router } from 'express'
import { PerformanceController as controller } from './performance.controller'

const router = Router()

router.post('/', controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', controller.updateData)
router.delete('/:id', controller.deleteData)

export const PerformanceRouter = router

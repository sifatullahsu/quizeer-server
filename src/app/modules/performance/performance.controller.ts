import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { apiResponse, catchAsync } from '../../../shared'
import { PerformanceService as service } from './performance.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: `Performance created successfully.`,
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getAllData()

  apiResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: `Performances fetched successfully.`,
    data: result
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: `Performance fetched successfully.`,
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: `Performance updated successfully.`,
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: `Performance deleted successfully.`,
    data: result
  })
})

export const PerformanceController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}

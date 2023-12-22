import { Performance } from '@prisma/client'
import { prisma } from '../../../app'

type iType = Performance

const createData = async (payload: iType): Promise<iType | null> => {
  const result = await prisma.performance.create({
    data: payload
  })

  return result
}

const getAllData = async (): Promise<iType[]> => {
  const result = await prisma.performance.findMany({
    where: {}
  })

  return result
}

const getData = async (id: string): Promise<iType | null> => {
  const result = await prisma.performance.findUnique({
    where: { id }
  })

  return result
}

const updateData = async (id: string, payload: Partial<iType>): Promise<iType> => {
  const result = await prisma.performance.update({
    where: { id },
    data: payload
  })

  return result
}

const deleteData = async (id: string): Promise<iType> => {
  const result = await prisma.performance.delete({
    where: { id }
  })

  return result
}

export const PerformanceService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}

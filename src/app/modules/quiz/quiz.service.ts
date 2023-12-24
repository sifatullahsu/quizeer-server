import { Option, Question, Quiz } from '@prisma/client'
import { prisma } from '../../../app'

type iType = Quiz

type iCreatePayload = Quiz & {
  questions: (Omit<Question, 'quiz_id'> & {
    options: Omit<Option, 'question_id'>[]
  })[]
}

const createData = async (payload: iCreatePayload): Promise<iType | null> => {
  const result = await prisma.$transaction(async session => {
    const { questions, ...othersQuizData } = payload

    const quiz = await session.quiz.create({
      data: { ...othersQuizData }
    })

    for (const { options, ...othersQuestionData } of questions) {
      const question = await session.question.create({
        data: { quiz_id: quiz.id, ...othersQuestionData }
      })

      for (const optionData of options) {
        await session.option.create({
          data: { question_id: question.id, ...optionData }
        })
      }
    }

    const finalResult = await session.quiz.findUnique({
      where: { id: quiz.id },
      include: {
        questions: {
          include: {
            options: true
          }
        }
      }
    })

    return finalResult
  })

  return result
}

const getAllData = async (): Promise<iType[]> => {
  const result = await prisma.quiz.findMany({
    where: {},
    include: {
      questions: {
        include: {
          options: true
        }
      },
      categories: {
        select: { title: true, id: true }
      }
    }
  })

  return result
}

const getData = async (id: string): Promise<iType | null> => {
  const result = await prisma.quiz.findUnique({
    where: {
      id
    },
    include: {
      questions: {
        include: {
          options: true
        }
      }
    }
  })

  return result
}

const updateData = async (id: string, payload: Partial<iType>): Promise<iType> => {
  const result = await prisma.quiz.update({
    where: { id },
    data: payload
  })

  return result
}

const deleteData = async (id: string): Promise<iType> => {
  const result = await prisma.quiz.delete({
    where: { id },
    include: {
      questions: {
        include: {
          options: true
        }
      }
    }
  })

  return result
}

export const QuizService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}

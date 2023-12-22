import { $Enums } from '@prisma/client'

export type iRole = $Enums.Role

export type iMeta = {
  page: number
  limit: number
  count: number
}

export type iAuth = {
  id: string
  name: string
  email: string
  role: iRole
  access_token: string
}

export type iReturnWithMeta<T> = {
  meta: iMeta
  result: T
}

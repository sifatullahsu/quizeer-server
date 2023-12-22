import { PrismaClient } from '@prisma/client'
import app from './app'
import config from './config'

const PORT = config.port || 5000
const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
  console.log('The Database Connection Successfull')

  app.listen(PORT, () => {
    console.log(`Application Running On PORT ${PORT}`)
  })
}

main()

import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: process.env.DB_URL,
  jwtSecret: process.env.JWT_SECRET
}

export default config

/* eslint-disable no-undef */
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  db_uri: process.env.DB_URI,
  user_default_pass: process.env.USER_DEFAULT_PASS,
}

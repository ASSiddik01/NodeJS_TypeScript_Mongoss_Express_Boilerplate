import mongoose from 'mongoose'
import config from '../config'
import app from '../app'
import { logger } from './logger'

export async function dbConnect() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, (): void => {
      logger.info(
        `==== ✌️  Your server is running on http://localhost:${config.port} ====`
      )
    })
    logger.info(`==== ✌️  DB Connection is succesfully ====`)
  } catch (error) {
    logger.error(`==== 🤞  Database Connection Error ====`)
  }
}

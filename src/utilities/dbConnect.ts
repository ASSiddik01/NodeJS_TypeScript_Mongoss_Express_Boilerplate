/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from '../config'
import app from '../app'

export async function dbConnect() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, (): void => {
      console.log(
        `==== ✌️  Your server is running on http://localhost:${config.port} ====`
      )
    })
    console.log(`==== ✌️  DB Connection is succesfully ====`)
  } catch (error) {
    console.log(`==== 🤞  Database Connection Error ====`)
  }
}

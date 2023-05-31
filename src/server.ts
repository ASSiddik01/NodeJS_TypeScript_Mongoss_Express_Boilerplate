import app from './app'
import { errorHandler } from './middleware/errorHandler'
import { dbConnect } from './utilities/dbConnect'

dbConnect()

// Handle Error || Close App
app.use(errorHandler)

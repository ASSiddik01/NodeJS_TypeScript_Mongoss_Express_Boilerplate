import { Request, Response } from 'express'

export const errorHandler = (err: Error, req: Request, res: Response): void => {
  res.send(err.message)
}

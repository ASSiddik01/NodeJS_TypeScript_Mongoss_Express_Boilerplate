import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

export const createUserService = async (data: IUser): Promise<IUser | null> => {
  // generated ID
  const id = await generateUserId()
  data.id = id
  // default password

  const result = await User.create(data)
  if (!result) {
    throw new Error('User create failed')
  }
  return result
}

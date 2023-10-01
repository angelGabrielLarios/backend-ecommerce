import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'



export const createUserRouter = ({ userModel }) => {
    const userRouter = Router()

    const userController = new UserController({ userModel })

    userRouter.post('/register', userController.createUser)
    userRouter.post('/login', userController.login)




    return userRouter

}

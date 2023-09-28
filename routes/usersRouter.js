import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'



export const createUserRouter = ({ userModel }) => {
    const productsRouter = Router()

    const productController = new UserController({ userModel })

    productsRouter.post('/register', productController.createUser)
    productsRouter.post('/login', productController.login)


    return productsRouter

}

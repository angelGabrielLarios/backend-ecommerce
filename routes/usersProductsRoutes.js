import { Router } from 'express'
import { UserProductController } from '../controllers/UserProductController.js'



export const createUserProductRouter = ({ userProductModel }) => {
    const userProductRouter = Router()

    const userProductController = new UserProductController({ userProductModel })

    userProductRouter.post('/', userProductController.insertCartProducts)
    userProductRouter.patch('/', userProductController.updateUserProducts)

    userProductRouter.get('/:usuario_nif', userProductController.getUserProducts)
    userProductRouter.delete('/', userProductController.deleteUserProducts)





    return userProductRouter.delete('/', userProductController.deleteUserProducts)

}

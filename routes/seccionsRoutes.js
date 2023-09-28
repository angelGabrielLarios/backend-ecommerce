import { Router } from 'express'
import { SeccionController } from '../controllers/SeccionController.js'



export const createSecciontRouter = ({ seccionModel }) => {
    const seccionsRouter = Router()

    const seccionController = new SeccionController({ seccionModel })

    seccionsRouter.get('/', seccionController.getAll)

    return seccionsRouter

}

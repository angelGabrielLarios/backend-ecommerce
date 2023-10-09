import { Router } from 'express'

import { VisitaController } from '../controllers/VisitaController.js'



export const createVisitaRouter = ({ visitaModel }) => {
    const visitaRouter = Router()
    const visitaController = new VisitaController({ visitaModel })
    visitaRouter.post('/', visitaController.createNewVisita)

    return visitaRouter

}

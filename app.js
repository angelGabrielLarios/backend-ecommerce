import express, { json, urlencoded } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createProductRouter } from './routes/productsRoutes.js'
import { createUserRouter } from './routes/usersRouter.js'
import { createSecciontRouter } from './routes/seccionsRoutes.js'
import { createUserProductRouter } from './routes/usersProductsRoutes.js'
import { createVisitaRouter } from './routes/visitaRoutes.js'
/* 
ALTER TABLE Usuarios MODIFY COLUMN NIF INT AUTO_INCREMENT PRIMARY KEY;

*/


export const createApp = ({ productModel, userModel, seccionModel, userProductModel, visitaModel }) => {
    const app = express()

    app.use(json())
    app.use(urlencoded({ extended: true }))
    app.use(corsMiddleware())
    app.disable('x-powered-by')

    app.use('/products', createProductRouter({ productModel }))
    app.use('/users', createUserRouter({ userModel }))
    app.use('/seccions', createSecciontRouter({ seccionModel }))
    app.use('/user_product', createUserProductRouter({ userProductModel }))
    app.use('/visitas', createVisitaRouter({ visitaModel }))

    const PORT = process.env.PORT ?? 1234

    app.listen(PORT, () => {
        console.log(`server listening on port http://localhost:${PORT}`)
    })
}

/* 
ALTER TABLE Usuarios MODIFY COLUMN Telefono VARCHAR(255);

*/
import { Router } from 'express'
import { ProductController } from '../controllers/ProductController.js'



export const createProductRouter = ({ productModel }) => {
    const productsRouter = Router()

    const productController = new ProductController({ productModel })

    productsRouter.get('/', productController.getAll)
    productsRouter.get('/search', productController.getProductSeccionBySearch)


    return productsRouter

}

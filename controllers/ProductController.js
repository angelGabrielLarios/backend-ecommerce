
export class ProductController {
    constructor({ productModel }) {
        this.productModel = productModel
    }

    getAll = async (req, res) => {
        const products = await this.productModel.getAll()

        res.json(products)
    }

    getProductSeccionBySearch = async (req, res) => {
        const { search } = req.query

        const productos_seccions = await this.productModel.getProductSeccionBySearch(search)

        res.json(productos_seccions)
    }
}
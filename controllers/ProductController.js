
export class ProductController {
    constructor({ productModel }) {
        this.productModel = productModel
    }

    getAll = async (req, res) => {
        const products = await this.productModel.getAll()

        res.json(products)
    }
}

export class UserProductController {
    constructor({ userProductModel }) {
        this.userProductModel = userProductModel
    }

    insertCartProducts = async (req, res) => {
        const { user_product } = req.body
        const user_product_res = await this.userProductModel.insertCartProducts(user_product)
        res.json(user_product_res)

    }


    getUserProducts = async (req, res) => {
        const { usuario_nif } = req.params
        const users_products = await this.userProductModel.getUserProducts(usuario_nif)
        res.json(users_products)

    }


    updateUserProducts = async (req, res) => {
        const { user_product } = req.body
        const user_product_res = await this.userProductModel.updateUserProducts(user_product)
        res.json(user_product_res)
    }

    deleteUserProducts = async (req, res) => {
        const { user_nif, codigo_producto } = req.query
        console.log({
            user_nif,
            codigo_producto
        })
        const user_product = await this.userProductModel.deleteUserProducts(user_nif, codigo_producto)

        res.json(user_product)
    }


}
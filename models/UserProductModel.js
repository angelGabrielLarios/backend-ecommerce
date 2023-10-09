import { connection } from "../config/config.js";


export class UserProductModel {

    static async insertCartProducts(user_product) {

        try {
            const [amount] = await connection.query(`SELECT cantidad FROM Usuario_Producto WHERE codigo_producto = ? AND usuario_nif = ?`, [user_product.codigo_producto, user_product.user_nif])


            if (amount.length > 0) {

                const { cantidad } = amount[0]

                await connection.query(`UPDATE Usuario_Producto SET cantidad = ? WHERE codigo_producto = ?`, [(cantidad + 1), user_product.codigo_producto])


                const [user_product_update] = await connection.query(`SELECT * FROM Usuario_Producto WHERE codigo_producto = ? AND usuario_nif = ?`, [user_product.codigo_producto, user_product.user_nif])

                return {
                    user_product_update: user_product_update[0],
                    message: "Producto actualizado"
                }
            }

            await connection.query(`INSERT INTO Usuario_Producto (usuario_nif, codigo_producto, cantidad) VALUES (?, ?, ?)`, [user_product.user_nif, user_product.codigo_producto, 1])

            return {
                user_product,
                message: "Producto agregado"
            }





        } catch (error) {
            throw new Error(error.message)
        }



    }

    static async getUserProducts(usuario_nif) {
        try {

            const [users_products] = await connection.query(`SELECT up.usuario_nif, up.codigo_producto, up.cantidad, p.nombre, p.descripcion, p.precio, p.url_image FROM Usuario_Producto up JOIN Producto p ON up.codigo_producto = p.codigo_producto WHERE up.usuario_nif = ?`, [usuario_nif])

            return users_products
        } catch (error) {
            throw new Error(error)
        }
    }


    static async updateUserProducts(user_product) {
        try {
            await connection.query(`UPDATE Usuario_Producto SET cantidad = ? WHERE  usuario_nif= ? AND codigo_producto = ?`, [user_product.cantidad, user_product.user_nif, user_product.codigo_producto])

            const [user_product_update] = await connection.query(`SELECT * FROM Usuario_Producto WHERE codigo_producto = ? AND usuario_nif = ?`, [user_product.codigo_producto, user_product.user_nif])

            return {
                user_product_update: user_product_update[0],
                message: "Producto actualizado"
            }
        } catch (error) {
            throw new Error(error)
        }
    }


    static async deleteUserProducts(user_nif, codigo_producto) {
        try {


            const [user_product] = await connection.query(`SELECT * FROM Usuario_Producto WHERE codigo_producto = ? AND usuario_nif = ?`, [codigo_producto, user_nif])

            console.log(user_product)
            if (user_product.length > 0) {

                await connection.query(`DELETE FROM Usuario_Producto WHERE usuario_nif = ? AND codigo_producto = ? `, [user_nif, codigo_producto])

                return {
                    message: "Producto Eliminado",

                }
            }

            return {
                hola: "hola"
            }


        } catch (error) {
            throw new Error(error)
        }
    }

}
import { connection } from "../config/config.js";


export class ProductModel {
    static async getAll() {
        const [productos] = await connection.query(`SELECT codigo_producto, nombre, descripcion, precio FROM Producto`)

        return productos

    }

}
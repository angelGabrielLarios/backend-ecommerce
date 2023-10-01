import { connection } from "../config/config.js";


export class ProductModel {
    static async getAll() {
        const [productos] = await connection.query(`SELECT codigo_producto, nombre, descripcion, precio, url_image FROM Producto`)

        return productos
    }

    static async getProductSeccionBySearch(search) {

        const [productos_seccions] = await connection.query(`SELECT P.codigo_producto as codigo_producto, P.nombre AS nombre, P.precio AS precio, P.url_image AS url_image, S.nombre AS nombre_seccion FROM Producto AS P JOIN Seccion_Producto AS SP ON P.codigo_producto = SP.codigo_producto JOIN Seccion AS S ON SP.codigo_seccion = S.codigo_seccion WHERE S.nombre = ?`, [search])

        console.log(`estoy en product model`)
        console.log(productos_seccions)

        return productos_seccions
    }

}

/* 
P.codigo_producto as codigo_producto, P.nombre AS nombre_producto, P.descripcion AS descripcion_producto, P.precio AS precio_producto, P.url_image AS url_image_producto, S.nombre AS nombre_seccion 
*/
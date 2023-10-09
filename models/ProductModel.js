import { connection } from "../config/config.js";


export class ProductModel {


    static async getAll() {
        const [productos] = await connection.query(`SELECT Producto.codigo_producto, Producto.nombre, Producto.descripcion, Producto.precio, Producto.url_image, Seccion.nombre AS nombre_seccion, Seccion.codigo_seccion AS codigo_seccion FROM Producto JOIN Seccion_Producto ON Producto.codigo_producto = Seccion_Producto.codigo_producto JOIN Seccion ON Seccion_Producto.codigo_seccion = Seccion.codigo_seccion`)

        return productos
    }

    static async getProductSeccionBySearch(search) {

        const [productos_seccions] = await connection.query(`SELECT P.codigo_producto as codigo_producto, P.nombre AS nombre, P.precio AS precio, P.url_image AS url_image, S.nombre AS nombre_seccion, S.codigo_seccion AS codigo_seccion FROM Producto AS P JOIN Seccion_Producto AS SP ON P.codigo_producto = SP.codigo_producto JOIN Seccion AS S ON SP.codigo_seccion = S.codigo_seccion WHERE S.nombre = ?`, [search])



        return productos_seccions
    }

}


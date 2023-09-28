import { connection } from "../config/config.js";


export class SeccionModel {

    static async getAll() {
        const [seccions] = await connection.query(`SELECT codigo_seccion, nombre FROM Seccion`)

        return seccions

    }

}
import { connection } from "../config/config.js";


export class VisitaModel {

    static async createNewVisita({ usuario_nif, codigo_seccion, fecha_visitada }) {

        try {
            await connection.query(`INSERT INTO Visita (usuario_nif, codigo_seccion, fecha_visita) VALUES (?, ?, ?)`, [usuario_nif, codigo_seccion, fecha_visitada])


            const [visitas] = await connection.query(`SELECT * FROM Visita WHERE usuario_nif = ? AND codigo_seccion = ? AND fecha_visita=?`, [usuario_nif, codigo_seccion, fecha_visitada])

            if (visitas.length > 0) {
                return {
                    message: "Visita agregada",
                    visita: visitas[0]
                }
            }
        } catch (error) {
            throw new Error(error)
        }

    }

}
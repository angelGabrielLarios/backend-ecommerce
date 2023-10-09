
export class VisitaController {
    constructor({ visitaModel }) {
        this.visitaModel = visitaModel
    }

    createNewVisita = async (req, res) => {
        const { usuario_nif, codigo_seccion, fecha_visitada } = req.body
        const visitas = await this.visitaModel.createNewVisita({ usuario_nif, codigo_seccion, fecha_visitada })
        res.json(visitas)
    }
}
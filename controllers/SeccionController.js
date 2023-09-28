
export class SeccionController {
    constructor({ seccionModel }) {
        this.seccionModel = seccionModel
    }

    getAll = async (req, res) => {
        const seccions = await this.seccionModel.getAll()
        res.json(seccions)
    }
}
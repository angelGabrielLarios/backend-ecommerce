
export class UserController {
    constructor({ userModel }) {
        this.userModel = userModel
    }

    createUser = async (req, res) => {
        const { nif, name, address, phone, email, password } = req.body
        const user = await this.userModel.createUser({ nif, name, address, phone, email, password })
        res.json(user)



    }

    login = async (req, res) => {
        const { email, password } = req.body

        const user = await this.userModel.login({ email, password })
        res.json(user)
    }
}
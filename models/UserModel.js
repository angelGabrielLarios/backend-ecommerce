import { connection } from "../config/config.js";
import { hash, compare } from 'bcrypt'
export class UserModel {
    /* static async getAll() {
        const [productos] = await connection.query(`SELECT CodigoProducto, Nombre, Descripcion, PrecioUnitario FROM Productos`)

        return productos


    } */

    static async createUser({
        nif,
        name,
        address,
        phone,
        email,
        password
    }) {
        try {
            const [users] = await connection.query('SELECT * FROM Usuario WHERE correo = ?', [email])

            if (users.length > 0) {
                return { emailAlreadyeExists: "Ya existe un usuario con ese correo electronico" }
            }

            else {
                const hashedPassword = await hash(password, 5)

                await connection.query('INSERT INTO Usuario (NIF, nombre, direccion, telefono, correo,password) VALUES (?, ?, ?, ?, ?, ?)', [nif, name, address, phone, email, hashedPassword]);

                const [usersCurrent] = await connection.query('SELECT * FROM Usuario WHERE correo = ?', [email])

                const userFound = usersCurrent[0]

                console.log(userFound, 'UserModel')
                return userFound

            }

        } catch (error) {
            throw Error(error)
        }



    }


    static async login({ email, password }) {
        try {
            const [usersCurrent] = await connection.query('SELECT * FROM Usuario WHERE correo = ?', [email])


            console.log(usersCurrent)
            if (usersCurrent.length === 0) {
                return { message: `Usuario o Contraseña Erroneas` }
            }
            const userFound = usersCurrent[0]




            const passwordMatch = await compare(password, userFound.password)


            if (passwordMatch) {
                return userFound
            }
            else {
                return { message: `Usuario o Contraseña Erroneas` }
            }



        } catch (error) {
            throw Error(error)
        }
    }

}

/* 
ALTER TABLE Usuarios
MODIFY COLUMN password VARCHAR(255);

*/
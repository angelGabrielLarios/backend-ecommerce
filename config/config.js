import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'appweb2'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

export const connection = await mysql.createConnection(connectionString)

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con MySQL:', err);
    } else {
        console.log('Conexión a MySQL establecida');
    }
});
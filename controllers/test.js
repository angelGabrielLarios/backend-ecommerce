const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('./db');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const [results, fields] = await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        res.json({ message: 'Usuario registrado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el usuario.' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const [results, fields] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

        if (results.length === 0) {
            res.status(401).json({ error: 'Credenciales incorrectas.' });
            return;
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.json({ message: 'Inicio de sesión exitoso.' });
        } else {
            res.status(401).json({ error: 'Credenciales incorrectas.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor.' });
    }
});

module.exports = router;

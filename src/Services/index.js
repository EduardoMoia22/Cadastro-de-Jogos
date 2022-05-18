const express = require('express');
const app = express();
const mysql = require('mysql');
const axios = require('axios');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudgames'
})

app.use(cors());
app.use(express.json());

app.post('/register', (req, res)=>{
    const { nome } = req.body;
    const { estilo } = req.body;

    let SQL = "INSERT INTO tb_games (gam_nome, gam_estilo) VALUES (?, ?)";

    db.query(SQL, [nome, estilo], (err, result)=>{
        console.log(err);
    })
})

app.get('/getCards', (req, res)=>{
    let SQL = "SELECT * FROM tb_games"

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () => {
    console.log('Servidor rodando');
})

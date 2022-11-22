const { Client } = require('pg');
const express = require('express');
const app = express();

const client = new Client(
    {
    host: "localhost",
    user: "Nizami",
    port: 5432,
    password: "1111",
    database: "CookBook"
    }
    );

client.connect();



app.get('/', (req, res) => {
    client.query('SELECT * FROM receipes;', (err, result)=>{
        if(!err){
        res.send(result.rows);
        } else {
        console.log(err.message);
        }
        client.end;
        })
}) 

app.listen('3000', () => console.log('connected'));
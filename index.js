const express = require("express");
const cors = require('cors');
const path = require ('path');
const connection = require ('./app/model/connection')

const app = express();
const mainRouter = require('./app/routes');
require ('dotenv').config

app.use(cors());
app.use(express.json()) // Supaya bisa response JSON 
app.use(express.urlencoded({extended: false})); // supaya bisa menerima body

//http router
app.use('/',mainRouter);


const port = 3000
app.listen(port, function(){
    console.log("Server start on", port)
    connection.authenticate()
    .then(function(){
        console.log("Database terhubung")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
})
// Creating Variables
const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require("dotenv").config()

// Connecting to MongoDB Database
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = "todos",
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connect to Database`);
        db = client.db(dbName)
        collection = db.collection("aircrafts")
    })

// Setting Up MiddleWares
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json)
app.use(cors())


// Setting Port To Listen
// PORT is defined in .env
app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
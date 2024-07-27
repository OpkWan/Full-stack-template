const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require("dotenv").config()

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
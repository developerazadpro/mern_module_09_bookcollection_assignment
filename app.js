const { readdirSync } = require("fs")
const path = require("path")
const express = require("express")
const mongoose = require("mongoose")
const bookRouter = require("./src/routes/bookRouter")

const app = express()
const helmet = require("helmet")
const dotenv = require("dotenv")
dotenv.config({path: './.env'})
const morgan = require("morgan");
const cors = require("cors")


// middleware implementation
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())



console.log(process.env.DATABASE)
// connect to DB and start server
mongoose
        .connect(process.env.DATABASE)
        .then(()=>{
            console.log("Database Connected with mongoDB Server.")
        })
        .catch(error => console.log(error))


app.use("/api/v1", bookRouter)

// undefined route
app.use("*", (req, res) => {
    res.status(404).json({
        status: "failed",
        message: "Data not found"
    })
})

module.exports = app

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        publishedYear:{
            type:Number
        }
    },
    {timestamps:true, versionKey:false}
)
const BookModel = mongoose.model('Book', bookSchema)
module.exports = BookModel
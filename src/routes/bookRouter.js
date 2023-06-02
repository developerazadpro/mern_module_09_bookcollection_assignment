const express = require("express")
const BookController = require("../controllers/BookController")
const router = express.Router()

//const bookController = require("../controllers/book.js")
//const mongoose = require("mongoose");

//create model
//const BookModel = require("../models/BookModel")

// routes
// router.get("/book-list",async (req, res) => {
//     try{
//         //const books = BookModel.find();
//         res.json('books')
//     }catch (err){
//         res.status(500).json({
//             message: 'Error retrieving books',
//             error:err.message
//         })
//     }
// })

router.get("/books", BookController.getAllBooks);

module.exports = router


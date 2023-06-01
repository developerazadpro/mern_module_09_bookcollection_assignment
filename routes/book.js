const express = require("express")
const router = express.Router

const bookController = require("../controllers/book.js")
const mongoose = require("mongoose");

//create model
const Book = require("../models/book")

// routes
router.get("/books",async (req, res) => {
    try{
        const books = Book.find();
        res.json(books)
    }catch (err){
        res.status(500).json({
            message: 'Error retrieving books',
            error:err.message
        })
    }
})



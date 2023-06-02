// import book model
const BookModel = require("../models/BookModel")

// get all books
exports.getAllBooks = async(req, res) => {
    try{
        const books = await BookModel.find({});
        if(books){
            res.status(200).json({data:books})
        }
    }catch (error){
        console.log("Error fetching book", error)
        res.status(500).json({error: "Internal server error"})
    }
}

// get single book
exports.getSingleBook = async(req, res) => {
    try{
        const book = await BookModel.findById(req.params.id)
        if(book){
            res.status(200).json({book})
        }else{
            res.status(404).json({ message: 'Book not found' });
        }
    }catch (error){
        console.log("Error fetching book", error)
        res.status(500).json({error: "Internal server error"})
    }
}

// save book
exports.saveBook = async (req, res) => {
    try{
        const book = new BookModel(req.body);
        const savedBook = await book.save();
        res.status(200).json(savedBook)
    }catch(error){
        console.log("Error saving book", error)
        res.status(500).json({error: "Internal server error"})
    }
}

// update single book
exports.updateBook = async(req, res) => {
    try{
        const book = await BookModel.findByIdAndUpdate(req.params.id, req.body)
        if(book){
            res.status(200).json({book})
        }else{
            res.status(404).json({ message: 'Book not found' });
        }
    }catch(error){
        console.log("Error updating book", error)
        res.status(500).json({error: "Internal server error"})
    }
}

// delete book
exports.deleteBook = async(req, res) => {
    try{
        const book = await BookModel.findByIdAndDelete(req.params.id)
        if(book){
            res.status(200).json("Book deleted")
        }else {
            res.status(404).json({ message: 'Book not found' });
        }
    }catch(error){
        console.log("Error deleting book", error)
        res.status(500).json({error: "Internal server error"})
    }
}
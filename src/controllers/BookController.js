// import book model
const BookModel = require("../models/BookModel")

exports.getAllBooks = async(req, res) => {
    try{
        const data = await BookModel.find({});
        res.json(data);
    }catch (error){
        console.log("Error fetching data", error)
        res.status(500).json({error: "Internal server error"})
    }
}


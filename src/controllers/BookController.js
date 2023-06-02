//const express = require("express")
// import book model
const BookModel = require("../models/BookModel")
//const DataModel = require("../models/BookModel")
//const router = express.Router()
data = BookModel.find();
console.log(data);


exports.getAllBooks = (req, res) => {
    try{
        const data = BookModel.find();
        res.json(data);
    }catch (error){
        console.log("Error fetching data", error)
        res.status(500).json({error: "Internal server error"})
    }
}

// Fetch all data
// router.get('/data', async (req, res) => {
//     try {
//         const data = await DataModel.find();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching data', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

//module.exports = router;
//module.exports = router

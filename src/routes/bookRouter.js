const express = require("express")
const BookController = require("../controllers/BookController")
const router = express.Router()

router.get("/books",     BookController.getAllBooks);
router.get("/books/:id", BookController.getSingleBook);
router.post("/books",    BookController.saveBook);
module.exports = router;


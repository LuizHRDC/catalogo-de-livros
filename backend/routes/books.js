const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.post("/", booksController.addBook);
router.get("/:userId", booksController.getBooksByUser);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
router.get("/book/:id", booksController.getBookById);


module.exports = router;

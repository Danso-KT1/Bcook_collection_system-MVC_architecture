// server/controllers/bookController.js
const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
    const { title, author, price, genre_id, copies_left } = req.body; // Include all required fields
    try {
        const newBook = await Book.create({ title, author, price, genre_id, copies_left }); // Pass an object
        res.status(201).json({ message: 'Book added', book: newBook });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    const { title } = req.params;
    try {
        const result = await Book.deleteByTitle(title);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted', result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.getAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.delete('/:title', bookController.deleteBook);
router.get('/', bookController.getAllBooks);

module.exports = router;
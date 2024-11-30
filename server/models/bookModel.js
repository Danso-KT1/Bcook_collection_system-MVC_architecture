// server/models/bookModel.js
const pool = require('../db/db');

class Book {
    static async create(title, author, price) {
        const result = await pool.query(
            'INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING *',
            [title, author, price]
        );
        return result.rows[0];
    }

    static async deleteByTitle(title) {
        const result = await pool.query('DELETE FROM books WHERE title = $1 RETURNING *', [title]);
        return result;
    }

    static async getAll() {
        const result = await pool.query('SELECT * FROM books');
        return result.rows;
    }
}

module.exports = Book;
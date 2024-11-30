// server/db/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // replace with your PostgreSQL username
    host: 'localhost',
    database: 'Book_collection', // replace with your database name
    password: '0270721828T', // replace with your PostgreSQL password
    port: 5432,
});

module.exports = pool;
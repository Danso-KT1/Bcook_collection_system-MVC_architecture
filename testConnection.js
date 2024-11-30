// testConnection.js
const pool = require('./db/db'); // Adjust the path if necessary

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to database:', res.rows[0]);
    }
    pool.end();
});
const { Pool } = require('pg');

// Create a new pool for PostgreSQL connection
const pool = new Pool({
  user: 'your_username', // replace with your database username
  host: 'localhost', // replace with your database host
  database: 'your_database', // replace with your database name
  password: 'your_password', // replace with your database password
  port: 5432, // default PostgreSQL port
});

// Initialize the database connection
pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = pool;
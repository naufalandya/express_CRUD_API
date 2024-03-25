const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'binar',
    password: 'Phoeblex25',
    port: 5432,
});

module.exports = pool;

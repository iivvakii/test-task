const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'demo.cfkwc6i6m30n.eu-north-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'Ivan_stef1',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
})

module.exports = pool;


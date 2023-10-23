const pg = require('pg');
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
let pool;

if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

else {
    pool = new pg.Pool({
        host: PGHOST,
        port: 5432,
        database: PGDATABASE,
        user: PGUSER,
        password: PGPASSWORD,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

module.exports = pool;

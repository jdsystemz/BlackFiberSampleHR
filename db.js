const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "blackfiber_hr",
    password: "0829",
    port: 5432
});

module.exports = pool;

const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres",
    database: "messageboard",
    password: "Patil@987",
    port: 5432
});
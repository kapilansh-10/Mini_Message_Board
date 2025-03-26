const pool = require("./pool")

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertNewMessage(User,text,date) {
    await pool.query(`INSERT INTO messages (username, text, date) VALUES ($1, $2, $3)`,
        [username,text,date]
    )
}

module.exports = {
    getAllMessages,
    insertNewMessage
}
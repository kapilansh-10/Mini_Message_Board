const db = require("../db/queries")


async function getAllMessages(req, res){
    const messages = await db.getAllMessages()
    res.render("index", { title:"Mini MessageBoard ", messages: messages })
}

async function createMessageGet(req, res){
    res.render("form") 
}

async function createMessagePost(req, res){
    console.log(req.body)
    const { username, message_text } = req.body;
    await db.insertNewMessage(username, message_text, new Date().toISOString().split('T')[0])
    res.redirect('/')
}

module.exports = {
    getAllMessages,
    createMessageGet,
    createMessagePost
}

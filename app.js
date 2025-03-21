const express = require("express")
const path = require("node:path");
const { title } = require("node:process");
const bodyParser = require('body-parser');


const PORT = 8080;
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));

const messages = [
    {
        text: "Hi there",
        user: "Amanda",
        added: new Date()
    },
    {
        text: "How its going",
        user: "Roman",
        added: new Date()
    }
];

app.get('/', (req, res) => {
    res.render("index", { title:"Mini MessageBoard ", messages: messages })
})

app.get('/new', (req, res) => {
    res.render("form")    
})

app.post('/new', (req, res) => {
    console.log(req.body)
    const { messageUser, messageText } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() })
    res.redirect('/')
})















app.listen(PORT, console.log(`Server is running on port ${PORT}`))
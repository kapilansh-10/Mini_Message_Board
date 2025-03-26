const express = require("express")
const path = require("node:path");
const { title } = require("node:process");
const bodyParser = require('body-parser');
const userRouter = require("./routes/usersRouter")


const PORT = 8080;
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));

// const messages = [
//     {
//         text: "Hi there",
//         user: "Amanda",
//         added: new Date()
//     },
//     {
//         text: "How its going",
//         user: "Roman",
//         added: new Date()
//     }
// ];

app.use("/", userRouter)

// app.get('/', (req, res) => {

// })

// app.get('/new', (req, res) => {
   
// })

// app.post('/new', (req, res) => {

// })

app.listen(PORT, console.log(`Server is running on port ${PORT}`))
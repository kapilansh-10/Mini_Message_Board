const usersControllers = require("../controllers/usersControllers")
const { Router } = require("express")
const userRouter = Router()

userRouter.get('/', usersControllers.getAllMessages)
userRouter.get('/new', usersControllers.createMessageGet)
userRouter.post('/new', usersControllers.createMessagePost)

module.exports = userRouter
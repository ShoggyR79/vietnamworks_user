const express = require('express');
const { getUserList, getUserById, createUser } = require('../controllers/user.controllers');
const userRouter = express.Router();

userRouter.use(express.json())

// get list user 
userRouter.get("/", getUserList)

// get user by id
userRouter.get("/:id", getUserById)

//add a new user
// TODO: add middleware
userRouter.post("/", createUser)



module.exports = userRouter
const express = require('express');
const { getUserList, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controllers');
const userRouter = express.Router();

userRouter.use(express.json())

// get list user 
userRouter.get("/", getUserList)

// get user by id
userRouter.get("/:id", getUserById)

//add a new user
// TODO: add middleware
userRouter.post("/", createUser)

//update a user
// add middleware
userRouter.put("/:id", updateUser)

//delete a user
userRouter.delete("/:id", deleteUser)


module.exports = userRouter
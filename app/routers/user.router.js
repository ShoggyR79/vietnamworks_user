const express = require('express');
const { getUserList, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controllers');
const { checkExist, validateEmailUsername } = require('../middleware/validations/check-exist.middleware');
const userRouter = express.Router();

userRouter.use(express.json())

// get list user 
userRouter.get("/", getUserList)

// get user by id
userRouter.get("/:id", checkExist , getUserById)

//add a new user
// TODO: add middleware
userRouter.post("/", validateEmailUsername, createUser)

//update a user
// add middleware
userRouter.put("/:id", checkExist, updateUser)

//delete a user
userRouter.delete("/:id", checkExist , deleteUser)


module.exports = userRouter
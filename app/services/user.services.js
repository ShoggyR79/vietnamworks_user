const mongoose = require("mongoose");
const { User } = require('../models/user')

mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error', error)
    })


const getList = () => {
    User
        .find()
        .select('username email firstName lastName')
        .then(userArr => {
            if (!userArr) return false;
            return userArr;
        })
        .catch(err => {
            console.log(err);
            return false;
        })
}

const getDetail = (id) => {
    User
        .findById(id)
        .then(user => {
            if (!user) return false;
            return user;
        })
        .catch(console.log)
}

const create = (input) => {
    let {username, email} = input
    console.log("test", username)
    User
        .findOne()
        .or([{ username}, {email}])
        .then(user => {
            if (user) return false;
            const newUser = new User({
                ...input,
            })
            return newUser.save()
                .then(user => {
                    return user;
                })
        })
        .catch(console.log)
}


module.exports = {
    getList,
    getDetail,
    create
}
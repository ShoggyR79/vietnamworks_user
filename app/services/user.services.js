const mongoose = require("mongoose");
const { User } = require('../models/user')

mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error', error)
    })


const getList = async () => {
    const userArr = await User
        .find()
        .select('username email firstName lastName').exec()

    return userArr

}

const getDetail = async (id) => {
    const user = await User
        .findById(id)
    if (!user) return false;
    return user;
}

const create = async (input) => {
    let { username, email } = input

    //todo: middleware
    const user = await User
        .findOne()
        .or([{ username }, { email }])

    if (user) return false;
    const newUser = new User({
        ...input,
    })
    return newUser.save();
}


const update = async (id, input) => {
    try {
        const result = await User.findByIdAndUpdate(id, { ...input }).exec();
        console.log(result)
        return result;
    }
    catch (err) {
        return false;
    }

}

const deleteById = async (id) => {
    const byId = { _id: id };
    try {
        const deleteUser = await User.findOne(byId);
        if (deleteUser){
            await User.deleteOne(byId);
            return deleteUser;
        }
    }
    catch (err) {
        return false;
    }
}
module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById
}
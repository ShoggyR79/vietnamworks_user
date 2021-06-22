const { User } = require("../../models/user");


const checkExist = async (req, res, next) => {
    const { id } = req.params;
    try {
        const detail = await User.findOne({ _id: id }).exec();
        console.log(detail);
        if (detail) {
            next();
        } else {
            res.status(404).send("User not Found!");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const validateEmailUsername = async (req, res, next) => {
    let { username, email } = req.body
    try {
        const user = await User
            .findOne()
            .or([{ username }, { email }])
        if (user) {
            res.status(404).send("Username and/or Email already exist!")
        } else {
            next();
        }
    }catch(err){
        console.log(error);
        res.status(500).send(error)
    }
    
}

module.exports = {
    checkExist,
    validateEmailUsername
}
const { getList, getDetail, create } = require("../services/user.services")



const getUserList = async (req, res) => {
    const userList = await getList()
    if (userList) {
        res.status(200).send(userList)
    } else {
        res.status(404).send("Not found!")
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const student = await getDetail(id);

    if (student) {
        res.status(200).send(student)
    } else {
        res.status(404).send("Not found!")
    }
}

const createUser = async (req, res) => {
    let input = req.body;

    let newStudent = await create(input)

    console.log("test", newStudent)
    if (newStudent) {
        res.status(201).send(newStudent);
    }
    else {
        res.status(409).send("Username and/or Email already exists!")
    }
}


module.exports = {
    getUserList,
    getUserById,
    createUser
}
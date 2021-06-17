const { getList, getDetail, create } = require("../services/user.services")



const getUserList = (req, res) =>{
    const userList = getList()
    if (userList){
        res.status(200).send(studentList)
    }else{
        res.status(404).send("Not found!")
    }
}

const getUserById = (req, res)=>{
    const {id} = req.params;
    const student = getDetail(id);

    if (student) {
        res.status(200).send(student)
    }else{
        res.status(404).send("Not found!")
    }
}

const createUser = (req, res) =>{
    let input = req.body;
    
    const newStudent = create(input)
    if (newStudent){
        res.status(201).send(newStudent);
    }
    else{
        res.status(409).send("Username and/or Email already exists!")
    }
}


module.exports = {
    getUserList,
    getUserById,
    createUser
}
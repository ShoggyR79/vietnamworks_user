const { getList, getDetail } = require("../services/user.services")



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


module.exports = {
    getUserList
}
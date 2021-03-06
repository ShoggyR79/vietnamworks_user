const { getList, getDetail, create, update, deleteById } = require("../services/user.services")



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

    res.status(200).send(student)
    
}

const createUser = async (req, res) => {
    let input = req.body;

    const newStudent = await create(input)

    if (newStudent) {
        res.status(201).send(newStudent);
    }
    
}

const updateUser = async (req, res) => {
    let { id } = req.params;
    const input = req.body;

    const updatedUser = await update(id, input);

    if (updatedUser) {
        res.status(200).send(updatedUser);
    } 
}


const deleteUser = async(req, res)=>{
    let {id} = req.params;
    
    const deletedUser = await deleteById(id)
    if (deletedUser){
        res.status(200).send(deletedUser);
    }
}

module.exports = {
    getUserList,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
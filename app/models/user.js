const mongoose = require('mongoose')
const {BasicInfoSchema} = require('./basic_info');
const { ContactInfoSchema } = require('./contact_info');


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    basicInfo: {type: BasicInfoSchema},
    contactinfo:{type: ContactInfoSchema},
    summary: {type: String},
})


const User = mongoose.model('User',  UserSchema);


module.exports ={
    User,
    UserSchema
}
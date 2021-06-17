const mongoose = require('mongoose')
// const {BasicInfoSchema} = require('./basic_info');
// const { ContactInfoSchema } = require('./contact_info');


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    basicInfo: {
        profilePic: {type: String},
        jobTitle: {type: String},
        currentJobLevel: {type: String },
        yearsExperience: {type: Number }
    },
    contactinfo:{
        cellNumber: {type: String},
        dateOfBirth: {type: Date},
        Nationality: {type: String},
        gender: {type: String},
        maritalStatus: {type: String},
        country: {type: String},
        provinceCity: {type: String},
        district: {type: String},
        address: {type: String}
    },
    summary: {type: String},
})


const User = mongoose.model('User',  UserSchema);


module.exports ={
    User,
    UserSchema
}
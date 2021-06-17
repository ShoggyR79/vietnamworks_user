const mongoose = require('mongoose')


const ContactInfoSchema = new mongoose.Schema({
    cellNumber: {type: String},
    dateOfBirth: {type: Date},
    Nationality: {type: String},
    gender: {type: String},
    maritalStatus: {type: String},
    country: {type: String},
    provinceCity: {type: String},
    district: {type: String},
    address: {type: String}
})


const ContactInfo = mongoose.model('ContactInfo',  ContactInfoSchema);


module.exports ={
    ContactInfo, ContactInfoSchema
}
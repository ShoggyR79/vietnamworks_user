const mongoose = require('mongoose')


const ContactInfoSchema = new mongoose.Schema({
    cellNumber: {type: String, require: true},
    dateOfBirth: {type: Date, require: true},
    Nationality: {type: String, require: true},
    gender: {type: String, require: true},
    maritalStatus: {type: String, required: true},
    country: {type: String, require: true},
    provinceCity: {type: String, require: true},
    district: {type: String, require: true},
    address: {type: String, require: true}
})


const ContactInfo = mongoose.model('ContactInfo',  ContactInfoSchema);


module.exports ={
    ContactInfo, ContactInfoSchema
}
const mongoose = require('mongoose')


const BasicInfoSchema = new mongoose.Schema({
    profilePic: {type: String, required: true},
    jobTitle: {type: String ,required: true},
    currentJobLevel: {type: String ,required: true},
    yearsExperience: {type: Number ,required: true}
})


const BasicInfo = mongoose.model('BasicInfo',  BasicInfoSchema);


module.exports ={
    BasicInfo, BasicInfoSchema
}
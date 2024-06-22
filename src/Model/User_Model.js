const mongoose = require("mongoose")

const user_Schema = mongoose.Schema({
    First_name :{
        type: String,
        trim : true
    },
    Last_name :{
        type: String,
        trim : true
    },
    Email :{
        type: String,
        trim : true
    }
},{
    timestamps : true
})

const user = mongoose.model("User",user_Schema)

module.exports = user
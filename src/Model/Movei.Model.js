const mongoose = require("mongoose")

const  movei_Schema = mongoose.Schema({
    movei_name :{
        type: String,
        trim : true
    },
    movei_review : {
        type: Number,
        trim : true
    }
},{
    timestamps : true
})

const movei = mongoose.model("Movei",movei_Schema)

module.exports = movei
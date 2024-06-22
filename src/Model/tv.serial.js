const mongoose = require("mongoose")

const tvSerial_Schema = mongoose.Schema(
    {
        tvSerial_name:{
            type:String,
            trim:true
        },
        tvSerial_rating:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    })

    const tvSerial = mongoose.model("Tv_serial",tvSerial_Schema)

    module.exports = tvSerial
    
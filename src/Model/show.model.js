const { Timestamp } = require("mongodb")
const mongoose = require("mongoose")

const comedyShow_Schema = mongoose.Schema(
    {
        show_name:{
            type:String,
            trim:true
        },
        show_rating:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    })

const comedyShow = mongoose.model("ComedyShow",comedyShow_Schema)
module.exports = comedyShow
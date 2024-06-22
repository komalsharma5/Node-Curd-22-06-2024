const mongoose = require("mongoose")

const koreanDrama_Schema = mongoose.Schema(
    {
        KoreanDrama_Name :{
            type: String,
            trim:true
        },
        KoreanDrama_rating :{
            type: Number,
            default:0
        }
    },
    {
        timestamps: true
    }
)

const koreanDrama = mongoose.model("koreanDrama",koreanDrama_Schema)

module.exports = koreanDrama
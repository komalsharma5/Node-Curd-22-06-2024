const mongoose = require("mongoose")

const actionMovei_Schema = mongoose.Schema(
    {
        actionMovei_name : {
            type : String,
            trim:true
        },
        actionMovei_rating : {
            type : Number,
            default:0
        }
    },
    {
        timestamps : true
    })

    const actionMovei = mongoose.model("ActionMovei",actionMovei_Schema)

    module.exports = actionMovei
const express = require("express")
const { comedy_controller } = require("../../Controller")

const comedyShow_router = express.Router()

comedyShow_router.post(
    "/show-end",
    //controller
    comedy_controller.create_comedyShow_C
)
comedyShow_router.get(
    "/show-all",
    // cb <= controller
    comedy_controller.get_comedyShow_C

)
module.exports =  comedyShow_router
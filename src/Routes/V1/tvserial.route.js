const express = require("express")
const { Tvserial_Controller } = require("../../Controller")

const tvSerial_router = express.Router()

tvSerial_router.post(
    "/tvserial-list",
    //controller
    Tvserial_Controller.create_Tvserial_Controller_C
)

tvSerial_router.get(
    "/tvserial-all",
    //controller
    Tvserial_Controller.get_tvserial_controller_c
)
module.exports = tvSerial_router
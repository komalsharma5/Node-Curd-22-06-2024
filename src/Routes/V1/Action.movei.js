const express = require("express")
const { ActionMovei_Controller } = require("../../Controller")

const actionMovei_router = express.Router()

actionMovei_router.post(
    "/actionMovei-list",
    //controller
    ActionMovei_Controller.create_Actionmovei_Controller_C
)

actionMovei_router.get(
    "/actionMovei-all",
     //controller
     ActionMovei_Controller.get_actionMovei_controller
)

actionMovei_router.put(
    "/update/:Movei_id",
     //controller
    ActionMovei_Controller.put_ActionMovei_C
)

module.exports = actionMovei_router
const express = require("express")
const { korean_Controller } = require("../../Controller")

const korean_router = express.Router()

korean_router.post(
    "/korean-list",
    //controller
    korean_Controller.create_Korean_C
)

korean_router.get(
    "/korean-all",
     //controller
     korean_Controller.get_korean_C
)

module.exports = korean_router
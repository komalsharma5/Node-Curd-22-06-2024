const express = require("express")
const { series_Controller } = require("../../Controller")

const series_router = express.Router()

series_router.post(
    "/create-series",

    //controller
    series_Controller.create_series

)

module.exports = series_router
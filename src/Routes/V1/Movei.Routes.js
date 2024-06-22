const express = require("express")
const { movei_Controller } = require("../../Controller")

const moveiRouter = express.Router()


moveiRouter.post("/create-movie",
        // callaback || controller
        movei_Controller.create_movei1
    
)
module.exports = moveiRouter









moveiRouter.get(
    "/list",
    // callback || controller
    (req,res) => {
        try {
            res.status(200).json({
                success: true,
                message: "Route got hitted"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
)
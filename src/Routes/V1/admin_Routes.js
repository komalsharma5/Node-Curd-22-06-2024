const express = require("express")
const { admin_controller } = require("../../Controller")


const adminRouter = express.Router()

adminRouter.post(
    "/create-admin",
    //controller
    admin_controller.create_admin_C
)

adminRouter.get(
    "/list",
    // cb <= controller
    admin_controller.get_admin_C
)
adminRouter.delete(
    "/delete/:adminid",
    // cb <= controller
    admin_controller.delete_admin
)

adminRouter.put(
    "/update/:admin_id",
    // cb <= controller
    admin_controller.put_admin_C
)

//check series
adminRouter.post(
    "/check-series",
    // cb <= controller
    admin_controller.check_admin
)
module.exports = adminRouter
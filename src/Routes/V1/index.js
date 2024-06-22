const express = require("express")
const userRoute = require("./User_Routes")
const moveiRouter = require("./Movei.Routes")
const series_router = require("./Series.routes")
const adminRouter = require("./admin_Routes")
const comedyShow_router = require("./comedyShow.routes")
const korean_router = require("./korean.routes")
const tvSerial_router = require("./tvserial.route")
const actionMovei_router = require("./Action.movei")

const router = express()

router.use("/linking-pharse",userRoute)

router.use("/movei-link",moveiRouter)

router.use("/series",series_router)

router.use("/admin",adminRouter)

router.use("/comedy",comedyShow_router)

router.use("/korean",korean_router)

router.use("/tvserial",tvSerial_router)

router.use("/action",actionMovei_router)

module.exports = router
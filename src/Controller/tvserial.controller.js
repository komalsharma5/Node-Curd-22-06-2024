const { Tvserial_service } = require("../Service")


const create_Tvserial_Controller_C = async(req,res) =>{
    try {
        
        const data = req.body
        const new_tvSerial = await Tvserial_service.create_tvserial_service_S(data)

        if(!new_tvSerial){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message: "Create Tvserial Controller",
            data:new_tvSerial
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }

}

const get_tvserial_controller_c = async(req,res) =>{
    try {
        
        const new_Tvserial_List = await Tvserial_service.get_tvserial_service_S()

        if(!new_Tvserial_List){
            throw new Error("serail not found")
        }

        res.status(200).json({
            success:true,
            data:new_Tvserial_List
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}
module.exports = {
    create_Tvserial_Controller_C,
    get_tvserial_controller_c
}
const { Actionmovei_service } = require("../Service")

const create_Actionmovei_Controller_C = async(req,res) =>{
    try {
        
        const data = req.body
        const new_Actionmovei = await Actionmovei_service.create_actionMovei_Service_S(data)

        if(!new_Actionmovei){
            throw new Error("Action movei not found")
        }
        res.status(200).json({
            success:true,
            data:new_Actionmovei,
            message:"create Actionmovei successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_actionMovei_controller = async(req,res) =>{
    try {
        
        const new_Action_movei = await Actionmovei_service.get_actionMovei_service()

        if(!new_Action_movei){
            throw new Error("Action movei failed")
        }
        res.status(200).json({
            success:true,
            data:new_Action_movei,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const put_ActionMovei_C = async(req,res) => {
    try {

        const id = req.params.Movei_id 
        const data = req.body

        const movei_data = await Actionmovei_service.put_actionMovei_S(id,data)

        if(!movei_data){
            throw new Error("Action movei not found")
        }

        res.status(200).json({
            success:true,
            message:"put Actionmovei successfully",
            data : data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

}
module.exports = {
    create_Actionmovei_Controller_C,
    get_actionMovei_controller,
    put_ActionMovei_C
}
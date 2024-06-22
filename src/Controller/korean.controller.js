const { Korean_service } = require("../Service")



const create_Korean_C =async(req,res) =>{
    try {
        
        const data = req.body
        const new_korean = await Korean_service.create_korean_S(data)

        res.status(200).json({
            success:true,
            message:"Korean C created successfully",
            data: new_korean
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_korean_C = async(req,res) =>{
    try {
        
        const new_koreanDrama = await Korean_service.get_korean_S()

        if(!new_koreanDrama){
            throw new Error("korean_Drama not found")
        }

        res.status(200).json({
            success:true,
            message:"Korean C fetched successfully",
            data:new_koreanDrama
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
module.exports ={
    create_Korean_C,
    get_korean_C
}
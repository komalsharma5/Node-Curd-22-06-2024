
const { Comedy_service } = require("../Service")

const create_comedyShow_C = async(req,res)=>{

    try {
        
        const data = req.body

        const new_comedyShow = await Comedy_service.create_comedyShow_S(data)

        res.status(200).json({
            success: true,
            message: "Comedy Show Created Successfully",
            data: new_comedyShow
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create Comedy Show"
        })
    }

}

const get_comedyShow_C = async(req,res) =>{
    try {
          // service <= services => DATA
        const new_comedyShow = await Comedy_service.get_comedyShow_S()

        if(!new_comedyShow){
            throw new Error("Show not found")
        }
        res.status(200).json({
            success: true,
            message: "Comedy Show Fetched Successfully",
            data: new_comedyShow
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
    create_comedyShow_C,
    get_comedyShow_C
}
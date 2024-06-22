const { Series_Service } = require("../Service")


const create_series = async(req,res) =>{
    try{

        const data = req.body
         // service
        const new_series = await Series_Service.create_series_S(data)
        
         // success response
        res.status(200).json({
            success: true,
            message: "Series created successfully"
        })
    }catch(error){
        // error response
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_series
}
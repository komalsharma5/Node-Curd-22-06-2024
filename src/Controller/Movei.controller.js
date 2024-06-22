const { Movei_Service } = require("../Service")


const create_movei1 = async(req,res) =>{
    try{
         // Movie create in back-end
        // service

        // console.log(req.body)


        //service code

        const new_Movei = await Movei_Service.create_movei_S(req.body)
    
        res.status(200).json({
            sucsess: true,
            mesage : "jhgghgfd"
        })
    }catch(error){
        // try block error response

        res.status(400).json({
            sucsess: false,
            mesage : "Error"
        })
    } 
}

const create_movei2 = (req,res) =>{
    try{
         // Movie create in back-end
        // service

        // console.log(req.body)

        res.status(200).json({
            sucsess: true,
            mesage : "jhgghgfd"
        })
    }catch(error){
        // try block error response

        res.status(400).json({
            sucsess: false,
            mesage : "Error"
        })
    } 
}

const create_movei3 = (req,res) =>{
    try{
         // Movie create in back-end
        // service

        // console.log(req.body)

        res.status(200).json({
            sucsess: true,
            mesage : "jhgghgfd"
        })
    }catch(error){
        // try block error response

        res.status(400).json({
            sucsess: false,
            mesage : "Error"
        })
    } 
}

const create_movei4 = (req,res) =>{
    try{
         // Movie create in back-end
        // service

        // console.log(req.body)

        res.status(200).json({
            sucsess: true,
            mesage : "jhgghgfd"
        })
    }catch(error){
        // try block error response

        res.status(400).json({
            sucsess: false,
            mesage : "Error"
        })
    } 
}

module.exports = {
    create_movei1,
    create_movei2,
}
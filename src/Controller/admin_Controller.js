const { Admin_service } = require("../Service")


const create_admin_C = async(req,res) =>{
    try{
          // service => admin create
        const data = req.body
        const new_admin = await Admin_service.create_admin_S(data)

        console.log(new_admin)

        if(!new_admin){
            throw new Error("Something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Admin created successfully",
            data :  new_admin
        })
    } catch (error) {
         // !admin
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

const get_admin_C = async(req,res) => {
    try {
        // service <= services => DATA
        const admin_list = await Admin_service.get_admin_S()

        if(!admin_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: admin_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_admin = async(req,res) =>{
    try {
        
        // const id = req.body.id
        // const new_adminId = await Admin_service.delete_admin_S(id)
        // if(!new_adminId){
        //     throw new Error("Data not found")
        // }
        // res.status(200).json({
        //     success:true,
        //     message:"Admin deleted successfully",
        //     id: id
        // })


        // ==> PARAMS
        console.log(req.params);
        const id = req.params.adminid
        const new_adminId = await Admin_service.delete_admin_S(id)
        res.status(200).json({
                id: id
            })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const put_admin_C = async(req,res) =>{
    try {
        
        const id = req.params.admin_id
        const data = req.body
                 // id=> service 
                // data=> service 

        const new_adminData = await Admin_service.put_admin_S(id,data)

        if(!new_adminData){
            throw new Error("Data not update")
        }
        res.status(200).json({
            success: true,
            message: "Admin deleted successfully",
            data:data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const check_admin = async(req,res) =>{
    try {

        const name = req.body.admin_name
          // service <= particular data
        const result = await Admin_service.check_admin_S(name)

        if(!result){
            throw new Error("Admin not found")
        }

        res.status(200).json({
            success: true,
            message: "Admin is working",
            data : result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
    create_admin_C,
    get_admin_C,
    delete_admin,
    put_admin_C,
    check_admin

}
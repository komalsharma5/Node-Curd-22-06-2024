const { Admin } = require("../Model")

const create_admin_S = (data) =>{
    return Admin.create(data)
}
const get_admin_S = () => {
    return Admin.find()
}

const delete_admin_S = (id) =>{
    return Admin.findByIdAndDelete(id)
}

const put_admin_S = (id,data) =>{
    return Admin.findByIdAndUpdate(id, data)
}

//series chcek
const check_admin_S = (admin_name)=>{
    return Admin.findOne({admin_name})
}
module.exports = {
    create_admin_S,
    get_admin_S,
    delete_admin_S,
    put_admin_S,
    check_admin_S
}
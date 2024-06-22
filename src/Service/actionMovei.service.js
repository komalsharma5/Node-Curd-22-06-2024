const { ActionMovei } = require("../Model")

const create_actionMovei_Service_S = (data) =>{
    return ActionMovei.create(data)
}

const get_actionMovei_service = () =>{
    return ActionMovei.find()
}

const put_actionMovei_S = (id,data) =>{
    return ActionMovei.findByIdAndUpdate(id,data)
}
module.exports = {
    create_actionMovei_Service_S,
    get_actionMovei_service,
    put_actionMovei_S
}
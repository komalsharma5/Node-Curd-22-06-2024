const { tvSerial } = require("../Model")

const create_tvserial_service_S = (data) =>{
    return tvSerial.create(data)
}

const get_tvserial_service_S = () =>{
    return tvSerial.find()
}
module.exports = {
    create_tvserial_service_S,
    get_tvserial_service_S
}
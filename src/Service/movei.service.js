const { Movei } = require("../Model")


const create_movei_S = (data) =>{
     // console.log("Servicewssssss");

    return Movei.create(data)
}

module.exports = {
    create_movei_S
}
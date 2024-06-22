const { ComedyShow } = require("../Model")


const create_comedyShow_S = (data)=>{
    return ComedyShow.create(data)
}

const get_comedyShow_S = (data) =>{
    return ComedyShow.find()
}
module.exports = {
    create_comedyShow_S,
    get_comedyShow_S
}
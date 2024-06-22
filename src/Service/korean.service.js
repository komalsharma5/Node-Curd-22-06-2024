const { koreanDrama } = require("../Model")

const create_korean_S = (data) =>{
    return koreanDrama.create(data)
}

const get_korean_S =()=>{
    return koreanDrama.find()
}
module.exports = {
    create_korean_S,
    get_korean_S
}
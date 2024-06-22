const mongoose = require("mongoose")

const connectDB = () =>{
    mongoose.connect("mongodb+srv://sharmakomalweb:3qvcLD00F3ps0Zo0@cluster0.1darij1.mongodb.net/").then((data)=>{
        if(data){
            console.log("Database connected successfully")
        }
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB
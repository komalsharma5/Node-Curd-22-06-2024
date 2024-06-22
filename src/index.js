const express = require("express")
const connectDB = require("./db/DbConnection")
const router = require("./Routes/V1")

const app = express()

app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})


app.use(express.json())

app.use("/v1",router)


connectDB()


// CRUD
// REPL
// SOFTWARE
// FOLDER
// LINK
// METHOD


// URL
// SERVER LOCATION
// NAMESPACE => "/V1","/V2"
// LINKING PHRASE
// END-POINT
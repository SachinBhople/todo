const express = require("express")
const cors = require("cors")
require("dotenv").config({ path: "./.env" })
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/admin", require("./routes/todoRoute"))

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(5500, console.log("SEVER RUNNING"))
})

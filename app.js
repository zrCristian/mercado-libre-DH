const express = require("express")
// const path = require("path")

const PORT = 3000
const app = express()

app.use(express.static("public"))

app.get("/", (req, res)  => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(PORT, () => console.log("servidor corriendo en " + PORT))


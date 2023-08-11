const express = require("express")

const PORT = 3000
const app = express()

app.use(express.static("public"))

app.get("/", (req, res)  => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/register", (req, res)  => {
    res.sendFile(__dirname + "/views/register.html")
})

app.listen(PORT, () => console.log("servidor corriendo en " + PORT))


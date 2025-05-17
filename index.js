const express  = require("express")
const path = require("path")
const app = express()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res) => {
    return res.render("index")
})

app.get("/test",(req,res) => {
    return res.send("testinggggggggggggggg")
})

app.get("/name/:name",(req,res) => {
    const {name} = req.params;
    return res.render("index",{name})
})

app.listen(3000,() => {
    console.log("server started")
})
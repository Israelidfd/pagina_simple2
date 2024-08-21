const express= require("express")

const app = express()

app.get("/index",(req,res)=>{

    app.set("view engine", "ejs")

    res.render("index")
})

app.get("/footer",(req,res)=>{

    app.set("view engine", "ejs")

    res.render("footer")
})


app.listen(3.75.158.163, (req,res)=> {
    console.log("Corriendo en el puerto 3000")
})

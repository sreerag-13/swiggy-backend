const express=require("express")
const cors=require("cors")
const bcrypt=require("bcrypt")
const mongoose=require("mongoose")
const loginModel = require("./models/admin")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sreerag:sreerag@cluster0.onuj57g.mongodb.net/swiggydb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/adminsignup",(req,res)=>{
    let input=req.body
    let hashpassword=bcrypt.hashSync(input.PassWord,10)
    input.PassWord=hashpassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})

})
app.listen(8081,()=>{
    console.log("server start")
})
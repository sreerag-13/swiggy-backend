const mongoose=require("mongoose")
const loginSchema=mongoose.Schema(
    {
        Name:String,
        UserName:String,
        PassWord:String
    }
)
const loginModel=mongoose.model("logindata",loginSchema)
module.exports=loginModel
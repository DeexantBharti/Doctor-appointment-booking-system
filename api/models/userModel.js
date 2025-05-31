import mongoose from "mongoose";
import defaultImage from "../controllers/basicUrl.js";
const userSchema = new mongoose.Schema({
 name:{type:String, required : true },
 email:{type:String,required:true , unique:true},
 password:{type:String,required:true},
 image:{type:String,default:defaultImage },
 address:{type:Object,default:{line1:'',line2:''}},
 gender:{type:String,default:"Not Selected"},
 dob:{type:String,default:"Not Selected"},
 phone:{type:String,default:"000000000"},
 googleId:{type:String,unique:true,sparse:true}

},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel
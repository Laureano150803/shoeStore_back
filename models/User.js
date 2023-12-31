import mongoose from "mongoose";

let schema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:Number, required:true},
    is_online:{type:Boolean, required:true},
    verify_code:{type:String, required:true}
},{
    timestamps:true
})

let collection = 'Users'
const User = mongoose.model(collection, schema)

export default User
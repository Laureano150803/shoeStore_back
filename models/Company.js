import mongoose, { Types } from "mongoose";
let schema = new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:String, required:true},
    user_id:{type:Types.ObjectId, ref:'users', required:true}
},{
    timestamps:true
})
let collection = "companies"

const Company = mongoose.model(collection, schema)
export default Company
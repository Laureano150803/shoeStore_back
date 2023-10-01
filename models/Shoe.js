import mongoose, { Types } from "mongoose";

let schema = new mongoose.Schema({
    photo:{type:String, required:true},
    model:{type:String, required:true},
    size:{type:Number, required:true},
    brand:{type:String, required:true},
    color:{type:String, required:true},
    price:{type:Number, required:true},
    stock:{type:Number, required:true},
    company_id:{type:Types.ObjectId, ref:'companies', required:true}
}, {
    timestamps:true
})

let collection = 'shoes'
const Shoe = mongoose.model(collection, schema)
export default Shoe
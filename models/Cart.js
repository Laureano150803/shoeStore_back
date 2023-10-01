import mongoose from "mongoose";

let schema = new mongoose.Schema({
  user_id: {type: mongoose.Types.ObjectId, ref: 'users', required: true},
  product_id: {type: mongoose.Types.ObjectId, ref: 'shoes', required: true},
  product_name: {type: String, required: true},
  cover_photo: {type: String, required: false},
  price:{type: Number, required: true},
  color:{type:String, required:true},
  quantity:{type: Number, required: true},
  stock:{type: Number, required: true},
  size:{type: Number, required: true}
},
{
  timestamps: true,
  versionKey: false
})

let collection = 'carrito'

let Cart = mongoose.model(collection, schema)
export default Cart
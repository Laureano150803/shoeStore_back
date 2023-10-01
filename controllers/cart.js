import Shoe from '../models/Shoe.js';
import Cart from '../models/Cart.js'


const contoller = {
    
    create: async (req,res,next) => {
        const { user } = req
        let shoe = await Shoe.findById(req.params.id)
        if(shoe){
            
            try {
                await Cart.create({
                    product_id: req.params.id,
                    user_id: user._id,
                    product_name: shoe.model,
                    cover_photo: shoe.photo,
                    price: shoe.price,
                    color: shoe.color,
                    quantity: 1,
                    stock: shoe.stock,
                    size:shoe.size
                })
                return res.status (201).json({menssage:'product added to cart'})
            } catch (error) {
                next(error)
            }
        }
    },

    getall: async (req, res, next) => {
        const {user} = req
        try {
            let shoes = await Cart.find({user_id: user._id})
            return res.status (200).json({shoes})
        } catch (error) {
            next(error)
        }
    
    },
    update: async (req,res,next) => {
        try {
            let product = await Cart.findByIdAndUpdate(
                req.params.id,
                { quantity: req.body.quantity}
                )
            if (product){
                return res 
                    .status(200)
                    .json({
                        message: 'amount was updated',
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyOne: async (req,res,next) => {
        try {
            let item = await Cart.findByIdAndDelete( req.params.id )
            if( item ){
                return res
                    .status(200)
                    .json({
                        message:'Item successfully deleted'
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyAll: async (req,res,next) => {
        const { user } = req
        try {
            await Cart.deleteMany( { user_id: user._id})
            return res
                .status(200)
                .json({
                    message: 'Cart successfully deleted'
                })
        } catch (error) {
            next(error)
        }
    }
}



export default contoller
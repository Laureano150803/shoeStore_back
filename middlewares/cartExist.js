import Cart from "../models/Cart.js"

async function cartExists(req,res,next){

    let cart = await Cart.findOne( { product_id: req.params.id} )
    if ( cart ){
        return res 
            .status(400)
            .json({
                message: 'Product is already in the cart'
            })
    }
    return next()
}

export default cartExists
import Client from "../../models/Client.js"
import User from '../../models/User.js'


let create = async(req, res, next)=>{

    try {
         req.body.user_id = req.user._id

        let one = await Client.create(req.body)

        await User.findByIdAndUpdate(
            req.user._id,
            {
                role:2
            },
            {new:true})

        return res.status(201).json({
            status:201,
            success:true,
            Response:`Client ${one.name} created successfully`
    }) 
        
    } catch (error) {
        next(error)
        return res.status(400).json({
            status:400,
            success:false,
            Response:`oppsss`
    })
    }

}

export default create
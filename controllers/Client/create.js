import Client from "../../models/Client.js"
import User from '../../models/User.js'


let create = async(req, res, next)=>{

    try {
         req.body.user_id = req.user._id

        let one = await Client.create(req.body)

        const newUser=await User.findByIdAndUpdate(
            req.user._id,
            {
                role:2
            },
            {new:true})

        return res.status(201).json({
            status:201,
            success:true,
            response:`Client ${one.name} created successfully`,
            client:one,
            user:newUser
    }) 
        
    } catch (error) {
        next(error)
        return res.status(400).json({
            status:400,
            success:false,
            response:`oppsss`
    })
    }

}

export default create
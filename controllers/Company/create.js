import Company from "../../models/Company.js"
import User from '../../models/User.js'


let create = async(req, res, next)=>{

    try {
         req.body.user_id = req.user._id

        let one = await Company.create(req.body)

        await User.findByIdAndUpdate(
            req.user._id,
            {
                role:1
            },
            {new:true})

        return res.status(201).json({
            status:201,
            success:true,
            response:`Company ${one.name} created succesfully`
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
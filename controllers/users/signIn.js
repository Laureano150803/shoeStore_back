import User from '../../models/User.js'
import jwt  from 'jsonwebtoken'

let signIn = async(req, res, next)=>{
    try{
        await User.findOneAndUpdate(
            {email: req.body.email},
            {is_online:true}
            )
        const token = jwt.sign(
            {id:req.user.id},
            process.env.SECRETO,
            {expiresIn:60*60*24})

        const user = req.user
        user.password = null

    return res.status(200).json({
       success:true,
       response:'User signIn!',
       token,
       user
    })
    }catch(error){
        next(error)
    }
}
export default signIn
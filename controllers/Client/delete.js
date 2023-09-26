import Client from '../../models/Client.js'
import User from '../../models/User.js'

let deleteByid = async (req,res)=>{

    try {
        const user_id = req.user._id
        const client_id = req.params.id
    
        let deleted = await Client.findByIdAndDelete(client_id)
    
        if(deleted){
            await User.findByIdAndDelete(user_id)

            return res.status(200).json({
                status:200,
                success:true,
                Response:`Cliente: ${deleted.name} deleted`
            })
        } 
    } catch (error) {
        return res.status(400).json({
                status:400,
                success:false,
                Response:`oppps`
            })
    }
    
   
}
export default deleteByid
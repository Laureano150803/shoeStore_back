import Client from "../../models/Client.js"

const getAllClients = async(req, res)=>{
    try {
        let all = await Client.find()
        if(all.length === 0){
            return res.status(200).json({
                success:true,
                response:'Clients not found' 
            })
        }else{
            res.status(200).json({
                success:true,
                response:all
            })
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            response:'Bad request'
        })
    }
}
export default getAllClients
import Shoe from "../../models/Shoe.js";

let update = async(req, res)=>{
    try {
        let updated = await Shoe.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(updated){
            return res.status(200).json({
                success:true, 
                response:updated
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false, 
            response:'Internal Server Error'
        })
    }
}
export default update
import Shoe from "../../models/Shoe.js";

let getOne = async(req, res)=>{
    try {
        let one = await Shoe.findById(req.params.id)
        if(one){
            return res.status(200).json({
                success:true,
                response:one
            })
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            response:'Not found'
        })
    }
    

}
export default getOne
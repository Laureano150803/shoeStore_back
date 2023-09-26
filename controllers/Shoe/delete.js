import Shoe from "../../models/Shoe.js";

const deleteById = async(req, res)=>{
    try {
        let deleted = await Shoe.findByIdAndDelete(req.params.id)
        if(deleted){
            return res.status(200).json({
                success:true,
                response:`Shoe ${deleted.model} deleted`
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            response:`Internal Server Error`
        })
    }
    
}
export default deleteById
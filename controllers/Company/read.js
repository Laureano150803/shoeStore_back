import Company from '../../models/Company.js'

let read = async(req, res)=>{
    try {
        let all = await Company.find()
        if(all.length ===0){
            return res.status(200).json({
                success:true,
                response:"Companies not found"
            })
        }else{
            return res.status(200).json({
                success:true,
                response:all
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            response:'Internal server error'
        })
    }
    
}

export default read
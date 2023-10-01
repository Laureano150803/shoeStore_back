import Shoe from "../../models/Shoe.js";

const read = async (req, res) => {
    try {
        const all = await Shoe.find()
        if (all.length === 0) {
            return res.status(200).json({
                success: true,

                response: "Shoes not found"

            })
        }
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            response: 'Internal Server Error'
        })
    }

}
export default read
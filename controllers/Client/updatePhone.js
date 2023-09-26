import Client from "../../models/Client.js";

const updatePhone = async (req, res) => {
    try {
        const userId = req.user._id;
        const newPhoneNumber = req.body.phone;

        const updatedUser = await Client.findOneAndUpdate(
            {user_id:userId},
            { phone: newPhoneNumber },
            { new: true }
        );

        if (updatedUser) {
            return res.status(200).json({
                status: 200,
                success: true,
                response: updatedUser
            });
        } else {
            return res.status(400).json({
                status: 400,
                success: false,
                response: 'Failed to update phone number'
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            response: 'Internal server error'
        });
    }
};

export default updatePhone;

import User from '../models/User.js';

async function accountExistsSignUp(req, res, next) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({
                status: 400,
                response: 'User already exists'
            });
        }
        return next();
    } catch (error) {
        // Manejar el error aquí
        return res.status(500).json({
            status: 500,
            response: 'Internal Server Error'
        });
    }
}

export default accountExistsSignUp;
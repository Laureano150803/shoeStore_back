import { Router } from 'express';
import passport from '../middlewares/passport.js';
import mercadopagoController from "../controllers/payments/payments.js";


const router = Router();

// Ruta para procesar una donación
router.post('/',passport.authenticate("jwt",{session:false}),mercadopagoController);

export default router
import express  from "express";
const router = express.Router()
import getAllClients from "../controllers/Client/getAllClients.js";
import create from "../controllers/Client/create.js";
import deleteByid from "../controllers/Client/delete.js";
import updatePhone from "../controllers/Client/updatePhone.js";
import passport from "passport";
router.get('/',passport.authenticate('jwt', {session:false}),getAllClients )
router.post('/new',passport.authenticate('jwt', {session:false}), create)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteByid)
router.patch('/new/phone',passport.authenticate('jwt', {session:false}), updatePhone)
export default router
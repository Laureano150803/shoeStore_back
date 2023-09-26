import express from "express";
const router = express.Router()
import passport from "passport";
import read from "../controllers/Company/read.js";
import create from "../controllers/Company/create.js";
import updatePhone from "../controllers/Company/updatePhone.js";
import deleteByid from "../controllers/Company/delete.js";
router.post('/new',passport.authenticate('jwt', {session:false}), create)
router.get('/',passport.authenticate('jwt', {session:false}), read)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteByid)
router.patch('/new/phone',passport.authenticate('jwt', {session:false}), updatePhone)
export default router
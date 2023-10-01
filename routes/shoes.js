import express from "express";
const router = express.Router()
import create from "../controllers/Shoe/create.js";
import read from "../controllers/Shoe/read.js";
import deleteById from "../controllers/Shoe/delete.js";
import update from "../controllers/Shoe/update.js";
import getOne from "../controllers/Shoe/getOne.js";
import passport from "passport";

router.post('/new',passport.authenticate('jwt', {session:false}), create)
router.get('/:id', getOne)
router.get('/', read)
import passport from "passport";

router.post('/new',passport.authenticate('jwt', {session:false}), create)
router.get('/',passport.authenticate('jwt', {session:false}), read)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteById)
router.put('/:id',passport.authenticate('jwt', {session:false}), update)

export default router
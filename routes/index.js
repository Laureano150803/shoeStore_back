import  express  from 'express';
const router = express.Router();
import usersRouter from './users.js'
import clientsRouter from './clients.js'
import shoesRouter from './shoes.js'
import companiesRouter from './companies.js'
import cartRouter from './cart.js'
import payments from './payments.js';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/auth', usersRouter)
router.use('/clients', clientsRouter)
router.use('/shoes', shoesRouter)
router.use('/companies', companiesRouter)

router.use('/cart',cartRouter)
router.use('/payment', payments)



export default router

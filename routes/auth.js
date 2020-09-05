const router=require('express').Router();

const authController=require('../controllers/auth');

router.post('/login',authController.postLogin);


router.post('/add',authController.postRegister);

router.post('/verifyToken', authController.verifyToken);


module.exports=router;
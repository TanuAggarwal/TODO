const express=require('express');
const router=express.Router();
const controller=require('../controllers');

router.post('/postData',controller.postData);
router.get('/getData',controller.getData);
router.get('/getDataById/:id',controller.getDataById);
router.delete('/deleteDataById/:id',controller.deleteDataById);
router.patch('/updateData/:id',controller.updateData);



module.exports=router;
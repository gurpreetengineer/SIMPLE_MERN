const express = require('express');
const userController = require('../controller/userController')
const router = express.Router();


router.get('/', userController.getUser)
router.post('/addUser', userController.addUser)
router.put('/updateUser', userController.updateUser)
router.delete('/deleteUser/:id', userController.deleteUser)


module.exports = router;
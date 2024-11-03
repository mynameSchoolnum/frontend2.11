const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/list', userController.list);
router.get('/get/:id', userController.userGet);
router.post('/create', userController.create);
router.put('/edit/:id', userController.update);
router.delete('/delete/:id', userController.remove);

module.exports = router;
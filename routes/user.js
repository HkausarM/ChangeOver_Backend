const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
// router.route('/').get(userController.getUserData);
router.route('/').post(userController.checkLogin);

module.exports = router;

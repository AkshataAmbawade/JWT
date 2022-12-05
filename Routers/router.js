
const express = require('express');
const { createusers } = require('../Controllers/createuser');
const router = express.Router();


router.route('/user').post(createusers);


module.exports = router
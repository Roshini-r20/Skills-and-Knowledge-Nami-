const express = require('express');
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../../validators/auth')
const {signup, signin, requireSignin} = require("../../controller/admin/auth")

const router = express.Router();

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);

module.exports = router;
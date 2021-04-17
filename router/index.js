const express = require('express');
const router = express.Router();

const homecontroller = require('../constroller/home_controller');
const contactcontroller = require('../constroller/contact_controller');

router.get('/information',homecontroller.inform);

router.get('/',homecontroller.home);
router.get('/about',homecontroller.about);
router.get('/service',homecontroller.service);
router.get('/contact',homecontroller.contact);
router.post('/contact_feedback',contactcontroller.feedback)

module.exports= router;

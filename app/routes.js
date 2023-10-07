const express = require("express");
const router = express.Router();
const controller = require('./controller/function');
const middleware = require("./middleware/rate_limiter");

router.get('/home', middleware, controller.getReviewFunction);

router.post('/home', middleware, controller.addReviewFunction);

router.post('/poli', middleware,  controller.addBookingFunction);

module.exports = router;
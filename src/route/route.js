
const express = require('express');
const router = express.Router();
const authorController = require('../controller/authController');

router.post('/create',authorController.createAuthor);
router.post('/login',authorController.loginAuthor);

router.get("/test", function(req, res) {
    res.send("Hello World");
})

module.exports = router;
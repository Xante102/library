const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        page_title: 'Amber Library'
    });
    next();
});

module.exports = router;
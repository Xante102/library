const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const conn = require('../lib/db');

router.get('/students', (req, res, next) => {
    let varSQL = "SELECT * FROM students"

    conn.query(varSQL, (err, rows) => {
        if(err){

        } else{
            res.render('students', {
                data: rows
            });
        }
    });

    res.render('index', {
        page_title:  'Student List'
    });
    next();
});

module.exports = router;

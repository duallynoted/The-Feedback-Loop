const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//this will make a call to the server to get the feedback that is made/stored there
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback"`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);
        });//end GET query
});//end GET call server side

//this will create user-generated feedback
router.post('/', (req, res) => {
    console.log(req.body);    
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error POSTING feedback from PostgreSQL', error);
            res.sendStatus(500);
        })//end POST query
});//end POST call server side

module.exports = router;



const router = require('express').Router();
const mongoClient = require('mongodb').MongoClient;

router.post('/add', (req,res,next) => {
    mongoClient.db("dbExpanses").collection("expanses").insertOne("atif").then(()=> console.log('OK'));
})

router.get('/', (req, res, next) => {
    res.status(200).json({
        method:'Get expenses method'
    });
});

module.exports = router;
const mongoose = require('mongoose'); 
const router = require('express').Router();
const Expense = require('../models/expense');


// get all expanses 

router.get('/', (req, res, next) => {
    Expense.find()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => res.status(500).json(error));
});

// get one expanse 

router.get('/:id', (req, res, next) =>{
    Expense.findById(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => res.status(404).json(error));
})

// create new expanse

router.post('/add', (req, res, next) => {
    const { title, expense } = req.body;
    
    const newExpense = new Expense({
        title,
        expense
    });

    newExpense.save()
    .then( result => {
        res.status(200).json(result);
    })
    .catch(error => res.status(500).json(error));
});

// edit expanse 

router.patch('/edit/:id', (req, res, next) => {
    const obj = {
        title: req.body.title,
        expense:req.body.expense
    }

    Expense.update({_id: req.params.id }, obj)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => res.status(500).json(error));
});

// delete expanse 

router.delete('/remove/:id', (req, res, next) => {
    Expense.findByIdAndRemove(req.params.id)
    .then( result => {
        res.status(200).json(result);
    })
    .catch(error => res.status(404).json(error));
});

module.exports = router;
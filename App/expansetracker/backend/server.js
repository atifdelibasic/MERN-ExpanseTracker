const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

require('dotenv').config();

const PORT = 5000;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const uri = process.env.DB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri,
    options);

mongoose.connection.once('open', ()=> {
    console.log('MongoDB connection established successfullly');
});

const expensesRouter = require('./routes/Expenses');

app.use('/expenses', expensesRouter);

app.listen(PORT, () => {
    console.log('Listening on PORT ' + PORT);
});

const express = require('express');
const app = express();
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const url = 'mongodb+srv://atif123:niveamen@cluster0.awbz2.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new mongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

const run = async () => {
    try {
        await client.connect();
       
        console.log('Connected successfully!');
    } catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}


run()
const expensesRouter = require('./Routes/expenses');
app.use('/expenses', expensesRouter);


app.listen(port, () => {
    console.log('Listening on port..');
});
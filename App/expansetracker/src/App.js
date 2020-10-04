import React, { useState, useEffect } from 'react';
import './App.css';
import { Balance, Expenses, AddExpense } from './components'
import axios from 'axios'

function App() {
  let [expenses, setexpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/expenses/')
     .then(({ data }) => setexpenses(data))
     .catch(error => console.log(error));
  }, [expenses])

  return (
    <div className="container">
      <h2 className="p-3 mb-0 border bg-success text-white text-center">Expense Tracker</h2>
    <div className="w-60 mt-0 p-3 mx-auto bg-light">
      <Balance expenses={expenses} setexpenses={setexpenses}/>
      <Expenses expenses={expenses} setexpenses={setexpenses}/>
      <AddExpense expenses={expenses} setexpenses={setexpenses} />
    </div>
    </div>
  );
}

export default App;

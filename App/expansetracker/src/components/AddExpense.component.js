import React, {useState} from 'react'
import axios from 'axios'

const AddExpense = ({expenses, setexpenses}) => {

    const [title, settitle] = useState("");
    const [amount, setamount] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            title: title,
            expense:amount
        }

        axios.post('http://localhost:5000/expenses/add', newExpense)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        setexpenses([...expenses ]);
        settitle("");
        setamount(1);
    }

    return(
        <div className="mx-auto my-4">
            <h4 className="border-bottom pb-2">Add New Transaction</h4>

            <form onSubmit={ onSubmit }>
                <div className="form-group">
                  <label>Title</label>
                  <input className="form-control" maxLength="15" required type="text" value={ title } onChange={e => settitle(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Amount</label>
                  <input className="form-control" required type="text" value={ amount } type="number" onChange={e => setamount(e.target.value)}/>
                  <small class="form-text text-muted">(negative - expense, positive - income)</small>
                </div>
                <input type="submit"  className="btn btn-secondary" value="Add Transaction" />
            </form>
        </div>
    )
}

export default AddExpense;
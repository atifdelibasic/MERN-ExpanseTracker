import React from 'react' 
import axios from 'axios'

const ExpenseItem = (props) => {

    const removeTransaction = () =>  {
        console.log(props.ex._id);
        axios.delete('http://localhost:5000/expenses/remove/' + props.ex._id)
        .then(() => props.setexpenses([]))
        .catch(err => console.log(err));

    }

    return(
        <div className="row border mx-2 mb-2 p-2 d-flex">
            <input type="button" className={props.ex.expense>=0? "btn btn-success":"btn btn-danger"} onClick={removeTransaction} value="X"/>
            <div className="col d-flex justify-content-between">
                <p className="p-2 m-0 text-truncate">{ props.ex.title }</p>
                <p className="p-2 m-0">{props.ex.expense }</p>
            </div>
        </div>
    )
}

export default ExpenseItem;
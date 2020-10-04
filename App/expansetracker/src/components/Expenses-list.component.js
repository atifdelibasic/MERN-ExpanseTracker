import React from 'react'
import ExpenseItem from './Expense-item.component'

const Expenses = ({ expenses, setexpenes }) => {

    const loadList = () => {
       return expenses.map((ex) => {
                return (
                <ExpenseItem ex={ex} setexpenes={setexpenes}/>
                )
            })}
       return (
        <div className="mx-auto">
            <h4 className="my-4 border-bottom py-2">History</h4>
            <div>
                {
                    loadList()
                }
            </div>
        </div>
    )
}

export default Expenses;
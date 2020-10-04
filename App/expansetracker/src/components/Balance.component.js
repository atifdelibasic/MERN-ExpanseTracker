import React from 'react'

const Balance = ({ expenses }) => {

    const sum = (char) => {
        let sum = 0;
        expenses.map(({ expense }) => {
            if(char === "i" && expense > 0) {
                sum+=expense;
            } else if(char === "e" && expense < 0) {
                sum+= expense;
            } else if(char==="") {
                sum+=expense;
            }
        });
        return sum; 
    }

    return(
        <div>
            <div className="d-flex justify-content-center align-items-md-stretch align-items-center flex-md-row flex-column">
                <h4 className="card p-3 m-1 text-success">Your Balance:</h4>
                <h3 className="card p-3 m-1 text-center">
                    {
                        sum("")
                    } KM
                </h3>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
                <div className="card m-1 border p-3 text-center">
                    <h4>Income</h4>
                    <h4 className="text-success">{ sum("i") }</h4>
                </div>

                <div className="card m-1 border p-3 text-center">
                    <h4>Expense</h4>
                    <h4 className="text-danger">{ sum("e")  }</h4>
                </div>
            </div>
        </div>
    )
}
export default Balance;

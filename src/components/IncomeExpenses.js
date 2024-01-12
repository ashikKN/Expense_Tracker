import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter((amt)=>amt>0).reduce((acc,amt)=>(acc+=amt),0).toFixed(2)
  // console.log(income);
  const expense =( amounts.filter((amt)=>amt<0).reduce((acc,amt)=>(acc+=amt),0)*-1).toFixed(2)
 
  console.log(expense);
  return (
    <>
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
    </>
  )
}

export default IncomeExpenses

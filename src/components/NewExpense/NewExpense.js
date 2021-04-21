import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import {useState} from 'react';
export default function NewExpense(props) {
  const [openAddExpense,setOpenAddExpense]=useState(false);
  const saveExpenseDataHandler=(enteredData)=>{
    const expenseData={
      ...enteredData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  const openAddExpenseHandler=()=>{
    setOpenAddExpense(prev=>!prev);
  }
  let content = <button onClick={openAddExpenseHandler}>Add New Expense</button>;
  if(openAddExpense){
    content=<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={openAddExpenseHandler} />;
  }
  return (
    <div className='new-expense'>
      {content}
    </div>
  );
}

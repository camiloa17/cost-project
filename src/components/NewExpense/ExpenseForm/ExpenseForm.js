import {useState} from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
    const [title,setTitle] = useState('');

    const titleChangeHandler=(e)=>{
        setTitle(e.target.value);
    }
    const [amount,setAmount]=useState(0);

    const amountChangeHandler=(e)=>{
        setAmount(e.target.value);
    }

    const [date,setDate]=useState('');

    const dateChangeHandler = (e)=>{
        setDate(e.target.value)
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title,
            amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount(0)
        setDate('');
    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={title} />
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} />
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' onChange={dateChangeHandler} value={date}/>
        </div>
      </div>
      <div className='new-expense__actions' >
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type='submit' >Add Expense</button>
      </div>
    </form>
  );
}

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback '>No expense found.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((el) => (
        <li key={el.id}>
          <ExpenseItem
            expenseTitle={el.title}
            expenseAmount={el.amount}
            expenseDate={el.date}
          />
        </li>
      ))}
    </ul>
  );
}

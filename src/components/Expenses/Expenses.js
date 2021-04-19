import Card from '../Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import './Expenses.css';
export default function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.expenses.map((el) => (
        <ExpenseItem
          key={el.id}
          expenseTitle={el.title}
          expenseAmount={el.amount}
          expenseDate={el.date}
        />
      ))}
    </Card>
  );
}

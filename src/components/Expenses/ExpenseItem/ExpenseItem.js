
import Card from '../../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
  
  return (
    <Card className='expense-item'>
       <ExpenseDate expenseDate={props.expenseDate} />
      <div className='expense-item__description'>
        <h2>{props.expenseTitle}</h2>
        <div className='expense-item__price'>{props.expenseAmount}</div>
      </div>
      
    </Card>
  );
}

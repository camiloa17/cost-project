import './ExpenseDate.css';

export default function ExpenseDate(props) {
  const year = props.expenseDate.toLocaleDateString('en-US', {
    year: 'numeric',
  });
  const month = props.expenseDate.toLocaleDateString('en-US', {
    month: 'long',
  });
  const day = props.expenseDate.toLocaleDateString('en-US', { day: '2-digit' });
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

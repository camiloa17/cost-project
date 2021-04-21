import Card from '../Card/Card';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import './Expenses.css';
import { useState } from 'react';

export default function Expenses(props) {
  const [filter, setFilter] = useState('2020');

  const onFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  const filteredArray = props.expenses.filter(
    (el) =>
      el.date.toLocaleDateString('en-US', {
        year: 'numeric',
      }) === filter
  );



  return (
    <Card className='expenses'>
      <ExpenseFilter filter={filter} onFilterChange={onFilterChange} />
      <ExpensesChart expenses={filteredArray} />
      <ExpensesList items={filteredArray} />
    </Card>
  );
}

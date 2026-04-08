import React from 'react';

const BudgetTracker = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = budget - totalExpenses;

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      <p>Total Budget: {budget} ETB</p>
      <p>Total Expenses: {totalExpenses} ETB</p>
      <p>Remaining: <span className={remainingBudget < 0 ? 'over-budget' : ''}>{remainingBudget} ETB</span></p>
    </div>
  );
};

export default BudgetTracker;

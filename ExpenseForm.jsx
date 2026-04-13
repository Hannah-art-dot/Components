import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({ item: '', amount: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ ...expense, amount: parseFloat(expense.amount) });
    setExpense({ item: '', amount: '', category: '' });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Item/Service" value={expense.item} onChange={e => setExpense({...expense, item: e.target.value})} required />
      <input type="number" placeholder="Amount (ETB)" value={expense.amount} onChange={e => setExpense({...expense, amount: e.target.value})} required />
      <select value={expense.category} onChange={e => setExpense({...expense, category: e.target.value})}>
        <option value="">Select Category</option>
        <option value="Venue">Venue</option>
        <option value="Catering">Catering</option>
        <option value="Photography">Photography</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

import { useState } from "react";
import ExpenseCard from "./components/ExpenseCard";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
      <input
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
       <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          const newExpense = {
            id: Date.now(),
            name: name,
            amount: Number(amount),
            category: category,
          };

          setExpenses([...expenses, newExpense]);
          setName("");
          setAmount("");
          setCategory("");
        }}
      >
        Add Expense
      </button>
      <h1>Total Expenses: {totalExpenses}</h1>
    </div>
  );
}

export default App;

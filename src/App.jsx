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
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Personal Finance
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Expense Tracker
          </h1>

          <p className="mt-3 max-w-xl text-zinc-400">
            Keep track of where your money is going without making it
            complicated.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* Add Expense */}
          <div className="h-fit rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Add Expense</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Enter the details of your expense.
              </p>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Expense Name
                </label>

                <input
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="e.g. Groceries"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Amount */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Amount
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500">
                    Rs
                  </span>

                  <input
                    type="number"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Category
                </label>

                <input
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="e.g. Food"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              {/* Button */}
              <button
                className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.98]"
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
                + Add Expense
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* Total */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-blue-600/20 via-zinc-900 to-zinc-900 p-7">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              <p className="relative text-sm font-medium text-zinc-400">
                Total Expenses
              </p>

              <h2 className="relative mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Rs {totalExpenses.toLocaleString()}
              </h2>

              <p className="relative mt-3 text-sm text-zinc-500">
                {expenses.length}{" "}
                {expenses.length === 1 ? "expense" : "expenses"} recorded
              </p>
            </div>

            {/* Expenses */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Expenses</h2>

                <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                  {expenses.length} total
                </span>
              </div>

              {expenses.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/40 px-6 py-16 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-2xl">
                    💸
                  </div>

                  <h3 className="font-semibold text-zinc-200">
                    No expenses yet
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Add your first expense using the form.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {expenses.map((expense) => (
                    <ExpenseCard
                      key={expense.id}
                      expense={expense}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
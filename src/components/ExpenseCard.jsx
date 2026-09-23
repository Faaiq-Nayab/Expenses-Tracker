function ExpenseCard({ expense }) {
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900">
      <div className="flex min-w-0 items-center gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
          💳
        </div>

        {/* Info */}
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-zinc-100">
            {expense.name}
          </h3>

          <span className="mt-1 inline-block rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
            {expense.category}
          </span>
        </div>
      </div>

      {/* Amount */}
      <div className="ml-4 shrink-0 text-right">
        <p className="text-lg font-bold text-white">
          Rs {expense.amount.toLocaleString()}
        </p>

        <p className="text-xs text-zinc-600">
          Expense
        </p>
      </div>
    </div>
  );
}

export default ExpenseCard;
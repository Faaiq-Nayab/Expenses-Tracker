function ExpenseCard(props) {
  return (
    <div>
      <p>Item: {props.expense.name}</p>
      <p>Rs: {props.expense.amount}</p>
      <p>Category: {props.expense.category}</p>
    </div>
  );
}

export default ExpenseCard;

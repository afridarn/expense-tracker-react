import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const buttonAddHandler = () => {
    setDisplayForm(true);
  };

  const cancelButtonHandler = () => {
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button type="button" onClick={buttonAddHandler}>
          Add Expenses
        </button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

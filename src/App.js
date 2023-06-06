import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Senka Facial Wash",
    amount: "44000",
    date: new Date(2023, 4, 23),
  },
  {
    id: 2,
    title: "Taiyaki",
    amount: "35000",
    date: new Date(2023, 5, 24),
  },
  {
    id: 3,
    title: "MR DIY",
    amount: "16500",
    date: new Date(2022, 5, 25),
  },
  {
    id: 4,
    title: "Choco Sundae",
    amount: "12000",
    date: new Date(2021, 5, 26),
  },
  {
    id: 5,
    title: "Car Park",
    amount: "10000",
    date: new Date(2020, 5, 27),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

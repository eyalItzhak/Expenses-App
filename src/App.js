import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e0",
    title: "Mini-tv",
    amount: 230,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e5",
    title: "wisky",
    amount: 110,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e6",
    title: "Mixer",
    amount: 100,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e7",
    title: "computer",
    amount: 900.14,
    date: new Date(2021, 8, 12),
  },


];


const App = () => {
 
  const[expenses,setExpenses]  = useState (DUMMY_EXPENSES)

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses =>{
      console.log([expense,...prevExpenses])
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

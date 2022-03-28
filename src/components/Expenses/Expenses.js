import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpeneses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpeneses} />
        <ExpensesList items = {filteredExpeneses}/>
      </Card>
    </div>
  );
};
export default Expense;

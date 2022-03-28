import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //aproch 1
  const [enterdTitel, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");

  //aproch 2
  //   const [userInput, setUserInput] = useState({
  //     enterdTitel: "",
  //     enterdAmount: "",
  //     enterdDate: "",
  //   });

  const titleChangeHandler = (event) => {
    //approch 1
    setEnteredTitle(event.target.value);
    // console.log(event.target.value)

    //approch 2--worng way
    // setUserInput({
    //     ...userInput, //use the currect imput
    //     enterdTitel :event.target.value, //then overide the new input in the right pos
    // })
    // approch 2--right way
    // setUserInput((prevState) => {
    //   return { ...prevState, enterdTitel: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //approch 1
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    //approch 1
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitel,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitel}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>amount</label>
          <input
            type="number"
            value={enterdAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>date</label>
          <input
            type="date"
            value={enterdDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

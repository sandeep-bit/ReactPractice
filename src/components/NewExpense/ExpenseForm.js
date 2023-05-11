import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: " ",
  //   enteredAmount: " ",
  //   enteredDate: " ",
  // });

  const titleChangeHandeler = event => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const DateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const SubmitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseHandler(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Label</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandeler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2023-12-31"
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterHandler = DateInYear => {
    setFilterYear(DateInYear);
  };
  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === filterYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeDate={filterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

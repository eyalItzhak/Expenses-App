
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList =props => {
    if (props.items.length ===0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
   return (
   <ul className="expenses-list">
    {props.items.map(
        (
          expense //if there is , render them
        ) => (
          <ExpenseItem
            key={expense.id} //componet id to react to follow
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}

   </ul>)
};

export default ExpensesList;
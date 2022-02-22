import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: "New Desk",
      amount: 345.5,
      date: new Date(2020, 4, 7),
    },
    {
      id: 3,
      title: "New Shoes",
      amount: 98.85,
      date: new Date(2021, 8, 17),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense)
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;

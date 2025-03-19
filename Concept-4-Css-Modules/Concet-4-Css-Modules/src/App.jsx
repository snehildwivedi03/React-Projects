import "./App.css";
import FoodItem from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
function App() {
  // let foodItems = [];
  let foodItems = ["Apple", "Banana", "Carrot", "Dates", "Eggplant"];

  return (
    <>
      <h1 className="main-head">Healthy Foods</h1>

      <FoodItem items={foodItems}></FoodItem>
      <ErrorMsg items={foodItems}></ErrorMsg>
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./assets/components/FoodItem";
import ErrorMsg from "./assets/components/ErreorMessage";
function App() {
  let foodItems = ["Dal", "Salad", "Milk", "Cheese", "Oats"];
  // let foodItems = [];

  return (
    <>
      <h1> Healty Foods</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItem items={foodItems}></FoodItem>
    </>
  );
}

export default App;

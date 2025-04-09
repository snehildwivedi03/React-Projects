import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("The new food item is " + newFoodItem);
    }
  };
  return (
    <Container>
      <h1 className="main-head">Healthy Foods</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>

      <FoodItem items={foodItems}></FoodItem>
      <ErrorMsg items={foodItems}></ErrorMsg>
    </Container>
  );
}

export default App;

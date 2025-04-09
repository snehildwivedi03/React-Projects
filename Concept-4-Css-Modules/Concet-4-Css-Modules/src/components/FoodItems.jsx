import Item from "../Item";
import { useState } from "react";
const FoodItem = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyBtn={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItem;

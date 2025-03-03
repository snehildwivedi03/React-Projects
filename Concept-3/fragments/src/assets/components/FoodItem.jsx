import Item from "./Item";

const FoodItem = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item key={items} foodItem={items}></Item>
      ))}
    </ul>
  );
};
export default FoodItem;

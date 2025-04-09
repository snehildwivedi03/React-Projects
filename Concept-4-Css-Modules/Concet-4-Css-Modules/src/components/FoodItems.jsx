import Item from "../Item";

const FoodItem = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyBtn={() => console.log(`${item} is clicked`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItem;

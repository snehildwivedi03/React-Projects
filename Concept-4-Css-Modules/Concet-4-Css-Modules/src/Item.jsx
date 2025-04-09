import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyBtn }) => {
  return (
    <li className={`${styles["my-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{foodItem}</span>

      <button
        className={`${styles.buyBtn} btn btn-info`}
        onClick={handleBuyBtn}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;

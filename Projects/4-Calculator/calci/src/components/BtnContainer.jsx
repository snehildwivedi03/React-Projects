import styles from "./BtnContainer.module.css";
const BtnContainer = () => {
  const calculatorButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.btnContainer}>
        {calculatorButtonNames.map((btnName) => (
          <button key={btnName} className={styles.buttons}>
            {btnName}
          </button>
        ))}
      </div>
    </>
  );
};
export default BtnContainer;

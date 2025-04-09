import styles from "./ErrorMsg.module.css";
const ErrorMsg = ({ items }) => {
  return (
    <> {items.length === 0 && <p className={styles.errPara}>I'm Hungary</p>}</>
  );
};
export default ErrorMsg;

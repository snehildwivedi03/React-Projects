import styles from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const neeDisplayVal = calVal + buttonText;
      setCalVal(neeDisplayVal);
    }
  };
  return (
    <div className={styles.container}>
      <Display displayValue={calVal}></Display>
      <BtnContainer onButtonClick={onButtonClick}></BtnContainer>
    </div>
  );
}

export default App;

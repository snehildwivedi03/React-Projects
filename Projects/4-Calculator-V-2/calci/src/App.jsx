import styles from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("34");
  return (
    <div className={styles.container}>
      <Display displayValue={calVal}></Display>
      <BtnContainer
        onButtonClick={() => console.log("Button is Clicked")}
      ></BtnContainer>
    </div>
  );
}

export default App;

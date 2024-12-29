import "./App.css";
import MainHead from "./components/MainHead";
import MainContent from "./components/MainContent";
import LiveTime from "./components/LiveTime";
function App() {
  return (
    <center className="conatiner">
      <MainHead></MainHead>
      <MainContent></MainContent>
      <LiveTime></LiveTime>
    </center>
  );
}

export default App;

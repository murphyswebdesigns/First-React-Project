import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import "./styles.css";
import TomatoBox from "./TomatoBox";

// 1 -> display the counter number w/ state
// 2 -> render the actual tomatoes 🍅
// 3 -> refactor to create a TomatoBox component
export default function App() {
  const [tomatoes, setTomatoes] = useState("");

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <TomatoBox tomatoes={tomatoes} />
        <ButtonContainer tomatoes={tomatoes} setTomatoes={setTomatoes} />
      </div>
    </div>
  );
}

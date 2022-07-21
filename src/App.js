import { useState } from "react";
import React from "react";

const App = () => {

  //state
  const [temperatureValue, setTemperatureValue] = useState(10);
  let [tempColor, setTempColor] = useState("cold");

  //helper function
  const increaseTemp = () => {
    let newTemperatureValue = temperatureValue + 1;
    if (newTemperatureValue >=15) {
      setTempColor(tempColor = "hot");
    }
    setTemperatureValue(newTemperatureValue);
  }
  //helper function
  const decreaseTemp = () => {
    let newTemperatureValue = temperatureValue - 1;
    if (newTemperatureValue < 15) {
      setTempColor(tempColor = "cold");
    }
    setTemperatureValue(newTemperatureValue );
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}> {temperatureValue}°C</div>

      </div>
      <div className="button-container">
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
  )
}
export default App;
import React, { useState } from "react";
import StandardCalculator from "../standard-calculator/StandardCalculator.jsx";
import CurrencyCalculator from "../currency-calculator/CurrencyCalculator.jsx";
import "./calculator.css";

function Calculator() {
  const [activeCalculator, setActiveCalculator] = useState(0);

  return (
    <div className="calculator">
      <div className="calculator__header">
        <button className={"calculator__button " + (activeCalculator === 0 ? "calculator__button--active" : "")} onClick={() => setActiveCalculator(0)}>Calculator</button>
        <div className="calculator__divider" />
        <button className={"calculator__button " + (activeCalculator === 1 ? "calculator__button--active" : "")} onClick={() => setActiveCalculator(1)}>Exchange Rate</button>
      </div>
      <div className="calculator__wrapper" style={{ transform: `translateX(${activeCalculator * -100}%)` }}>
        <StandardCalculator />
        <CurrencyCalculator />
      </div>
    </div>
  );
}

export default Calculator;

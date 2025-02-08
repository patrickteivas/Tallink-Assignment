import React, { useEffect, useState } from "react";
import Keyboard from "../keyboard/Keyboard.jsx";
import StandardScreen from "../standard-screen/StandardScreen.jsx";
import mathFunctionsConfig from "../../config/mathFunctions.config.js";
import normalizeNumberAsString from "../../utils/normalizeNumberAsString.js";
import "./standard-calculator.css";

function StandardCalculator() {
  const [history, setHistory] = useState([]);
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState();
  const [operands, setOperands] = useState(["0", ""]);
  const [eraseDisplayOnNextInput, setEraseDisplayOnNextInput] = useState(false);

  useEffect(() => {
    if (eraseDisplayOnNextInput) {
      return;
    }

    const operationDisplay = operation?.display || "";
    setDisplay(operands[0] + operationDisplay + operands[1]);
  }, [operands, operation]);

  function saveOperationToHistory(result, operands, operation) {
    fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input1: operands[0], input2: operands[1], result, operation }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleClick(e) {
    const target = e.currentTarget;
    const value = target.value;

    if (eraseDisplayOnNextInput) {
      setEraseDisplayOnNextInput(false);
    }

    const operationConfig = mathFunctionsConfig[value];

    if (operationConfig) {
      if (operation) {
        return;
      }

      setOperation(operationConfig);
      return;
    }

    if (value === "clear") {
      setOperation();
      setOperands(["0", ""]);

      return;
    }

    if (value === "backspace") {
      if (operands[1].length) {
        setOperands((operands) => [operands[0], operands[1].slice(0, -1)]);
      } else if (operation) {
        setOperation();
      } else if (operands[0].length) {
        if (operands[0].length <= 1) {
          setOperands(["0", ""]);

          return;
        }

        setOperands((operands) => [operands[0].slice(0, -1), ""]);
      }

      return;
    }

    if (value === "equals") {
      const result = operation.handler(...operands);

      setHistory((history) => [...history, `${display}=${result}`]);
      setDisplay(result);
      saveOperationToHistory(result, operands, operation.display);
      setOperation();
      setOperands(["0", ""]);
      setEraseDisplayOnNextInput(true);

      return;
    }

    if (operation) {
      setOperands((operands) => [operands[0], normalizeNumberAsString(operands[1] + value)]);
    } else {
      setOperands((operands) => [normalizeNumberAsString(operands[0] + value), ""]);
    }
  }

  return (
    <div className="standard-calculator">
      <StandardScreen activeEquation={display} equationsHistory={history} />
      <Keyboard handleClick={handleClick} />
    </div>
  );
}

export default StandardCalculator;

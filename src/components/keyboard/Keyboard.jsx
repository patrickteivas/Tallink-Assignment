import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons"
import "./keyboard.css";

function Keyboard({ handleClick, currencyLayout = false }) {
  return (
    <div className="keyboard">
      <button className="keyboard__btn keyboard__btn--clear keyboard__btn--row-one" onClick={handleClick} value="clear">C</button>
      <button className="keyboard__btn keyboard__btn--remove keyboard__btn--row-one" onClick={handleClick} value="backspace">
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
      {!currencyLayout &&
        <>
          <button className="keyboard__btn keyboard__btn--operation keyboard__btn--row-one" onClick={handleClick} value="prime">P</button>
          <button className="keyboard__btn keyboard__btn--operation keyboard__btn--row-one" onClick={handleClick} value="divide">÷</button>
        </>
      }

      <button className="keyboard__btn keyboard__btn--row-two" onClick={handleClick} value={7}>7</button>
      <button className="keyboard__btn keyboard__btn--row-two" onClick={handleClick} value={8}>8</button>
      <button className="keyboard__btn keyboard__btn--row-two" onClick={handleClick} value={9}>9</button>
      {!currencyLayout &&
        <button className="keyboard__btn keyboard__btn--operation keyboard__btn--row-two" onClick={handleClick} value="multiply">X</button>
      }

      <button className="keyboard__btn keyboard__btn--row-three" onClick={handleClick} value={4}>4</button>
      <button className="keyboard__btn keyboard__btn--row-three" onClick={handleClick} value={5}>5</button>
      <button className="keyboard__btn keyboard__btn--row-three" onClick={handleClick} value={6}>6</button>
      {!currencyLayout &&
        <button className="keyboard__btn keyboard__btn--operation keyboard__btn--row-three" onClick={handleClick} value="substract">-</button>
      }

      <button className="keyboard__btn keyboard__btn--row-four" onClick={handleClick} value={1}>1</button>
      <button className="keyboard__btn keyboard__btn--row-four" onClick={handleClick} value={2}>2</button>
      <button className="keyboard__btn keyboard__btn--row-four" onClick={handleClick} value={3}>3</button>
      {!currencyLayout &&
        <button className="keyboard__btn keyboard__btn--operation keyboard__btn--row-four" onClick={handleClick} value="add">+</button>
      }

      {currencyLayout &&
        <button className="keyboard__btn keyboard__btn--row-five" onClick={handleClick} value="00">00</button>
      }
      <button className="keyboard__btn keyboard__btn--row-five" onClick={handleClick} value={0}>0</button>
      <button className="keyboard__btn keyboard__btn--row-five" onClick={handleClick} value=".">.</button>
      {!currencyLayout &&
        <button className="keyboard__btn keyboard__btn--equals keyboard__btn--row-five" onClick={handleClick} value="equals">=</button>
      }
    </div>
  );
}

export default Keyboard;

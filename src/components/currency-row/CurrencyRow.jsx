import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import getGroupedNumber from "../../utils/getGroupedNumber.js";
import textFill from "../../utils/textFill.js";
import "./currency-row.css";

function CurrencyRow({ rates, selectedCurrency, isActive, setActiveRow, setSelectedCurrency }) {
  const textRef = useRef(null);

  useEffect(() => {
    textFill({ element: textRef.current, maxSize: 30 });
  }, [selectedCurrency]);

  return (
    <div className={"currency-row " + (isActive ? "currency-row--active" : "")}>
      <div className="currency-row__select-col">
        <select className={"currency-row__select " + (rates.isFetching ? "currency-row__select--loader" : "")} htmlFor="currency-select" value={selectedCurrency.currency} onChange={(e) => setSelectedCurrency(e.target.value)} disabled={rates.isFetching}>
          {Object.keys(rates.data).map((rate) => {
            return (
              <option key={rate} value={rate}>{rate}</option>
            )
          })}
        </select>
      </div>
      <div className="currency-row__divider">
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <button className="currency-row__value-col" onClick={() => setActiveRow()} ref={textRef}>
        {getGroupedNumber(selectedCurrency.value)}
      </button>
    </div>
  );
}

export default CurrencyRow;

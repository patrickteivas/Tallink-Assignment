import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateRight } from "@fortawesome/free-solid-svg-icons"
import CurrencyRow from "../currency-row/CurrencyRow";
import "./currency-screen.css";

dayjs.extend(duration);
dayjs.extend(relativeTime);

function CurrencyScreen({ rates, selectedCurrencies, activeRow, setActiveRow, setSelectedCurrency, updateRates }) {
  const [humanizedDuration, setHumanizedDuration] = useState("");

  const updateHumanizedDuration = () => {
    const currentTime = Date.now();
    const lastUpdate = rates.lastUpdate;

    if (!lastUpdate) {
      return;
    }
    
    const offset = currentTime - lastUpdate;
    setHumanizedDuration(dayjs.duration(offset).humanize());
  }

  useEffect(() => {
    updateHumanizedDuration();
    const interval = setInterval(updateHumanizedDuration, 60 * 1000);

    return () => clearInterval(interval);
  }, [rates]);

  return (
    <div className="currency-screen">
      {Array.from(Array(2), (_, i) => {
        return (
          <CurrencyRow key={i} rates={rates} selectedCurrency={selectedCurrencies[i]} isActive={activeRow === i} setActiveRow={() => setActiveRow(i)} setSelectedCurrency={(currency) => setSelectedCurrency(i, currency)} />
        )
      })}

      <button className="currency-screen_reload-btn" onClick={updateRates}>
        Last Updated {humanizedDuration}
        <FontAwesomeIcon className="currency-screen_reload-icon" icon={faRotateRight} />
      </button>
    </div>
  );
}

export default CurrencyScreen;

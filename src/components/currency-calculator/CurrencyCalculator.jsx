import React, { useEffect, useState } from "react";
import Keyboard from "../keyboard/Keyboard.jsx";
import CurrencyScreen from "../currency-screen/CurrencyScreen.jsx";
import normalizeNumberAsString from "../../utils/normalizeNumberAsString.js";
import calculateExchange from "../../utils/calculateExchange.js";
import "./currency-calculator.css";

function CurrencyCalculator({ activeCalculator }) {
  const [rates, setRates] = useState({
    isFetching: false,
    lastUpdate: null,
    data: {},
  });
  const [selectedCurrencies, setSelectedCurrencies] = useState([
    {
      currency: "USD",
      value: "0",
    },
    {
      currency: "EUR",
      value: "0",
    }]);
  const [activeRow, setActiveRow] = useState(0);

  const getCurrencyRates = () => {
    setRates((rates) => {
      return {
        ...rates,
        isFetching: true,
      };
    });

    fetch("/api/rates")
      .then((response) => response.json())
      .then((data) => {
        setRates({
          isFetching: false,
          lastUpdate: Date.now(),
          data,
        });
      })
      .catch((error) => {
        setRates((rates) => {
          return {
            ...rates,
            isFetching: false,
          };
        });

        console.error(error);
      });
  };

  useEffect(() => {
    setSelectedCurrencies((selectedCurrencies) => {
      const activeCurrency = selectedCurrencies[activeRow];

      return selectedCurrencies.map((currency, index) => {
        if (index === activeRow) {
          return currency
        } else {
          return {
            ...currency,
            value: calculateExchange(activeCurrency, currency, rates.data),
          };
        }
      })
    })
  }, [rates]);

  useEffect(getCurrencyRates, []);

  useEffect(() => {
    if (activeCalculator === 1) {
      getCurrencyRates();
    }
  }, [activeCalculator])

  function handleClick(e) {
    const target = e.currentTarget;
    const value = target.value;

    if (value === "clear") {
      setSelectedCurrencies((currencies) => {
        return currencies.map((currency) => {
          return {
            ...currency,
            value: "0",
          }
        })
      })

      return;
    }

    if (value === "backspace") {
      setSelectedCurrencies((currencies) => {
        const activeCurrency = currencies[activeRow];
        const newValue = normalizeNumberAsString(activeCurrency.value.slice(0, -1)) || "0";
        const newCurrency = {
          ...activeCurrency,
          value: newValue,
        };

        return currencies.map((currency, index) => {
          const value = index === activeRow ? newValue : calculateExchange(newCurrency, currency, rates.data);

          return {
            ...currency,
            value,
          };
        })
      })

      return;
    }

    setSelectedCurrencies((currencies) => {
      const activeCurrency = currencies[activeRow];
      const newValue = normalizeNumberAsString(activeCurrency.value + value.toString());
      const newCurrency = {
        ...activeCurrency,
        value: newValue,
      };

      return currencies.map((currency, index) => {
        const value = index === activeRow ? newValue : calculateExchange(newCurrency, currency, rates.data);

        return {
          ...currency,
          value,
        }
      })
    })
  }

  function setSelectedCurrency(index, currency) {
    setSelectedCurrencies((selectedCurrencies) => selectedCurrencies.map((selectedCurrency, i) => {
      if (i === index) {
        return {
          ...selectedCurrency,
          currency,
        }
      } else {
        return selectedCurrency;
      }
    }));
  };


  return (
    <div className="currency-calculator">
      <CurrencyScreen rates={rates} selectedCurrencies={selectedCurrencies} activeRow={activeRow} setActiveRow={setActiveRow} setSelectedCurrency={setSelectedCurrency} updateRates={getCurrencyRates} />
      <Keyboard handleClick={handleClick} currencyLayout={true} />
    </div>
  );
}

export default CurrencyCalculator;

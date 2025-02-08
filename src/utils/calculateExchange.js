import normalizeNumberAsString from "./normalizeNumberAsString"

export default function calculateExchange(activeCurrency, currency, rates) {
  const exchangeValue = Number(activeCurrency.value) * (rates[activeCurrency.currency]?.[currency.currency] || 0);

  return normalizeNumberAsString(String(Math.round(exchangeValue * 100) / 100))
}

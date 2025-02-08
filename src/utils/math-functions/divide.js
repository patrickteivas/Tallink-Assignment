export default function divide(firstOperator, secondOperator) {
  const secondNumber = Number(secondOperator);

  if (secondNumber === 0) {
    return Infinity;
  }

  return Number(firstOperator) / Number(secondOperator);
}

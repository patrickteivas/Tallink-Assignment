export default function normalizeNumberAsString(operand) {
  const firstDotIndex = operand.indexOf(".");
  let beforeFirstDot = operand;
  let afterFirstDot = "";

  if (firstDotIndex >= 0) {
    [beforeFirstDot, afterFirstDot] = [operand.slice(0, firstDotIndex), operand.slice(firstDotIndex + 1)];
  }

  // Remove leading zeroes
  const normalizedBeforeFirstDont = beforeFirstDot.replace(/^0+/, "");
  // Avoid duplicated dots
  const noralizedAfterFirstDot = afterFirstDot.replaceAll(".", "");
  let result = normalizedBeforeFirstDont || "0";

  if (firstDotIndex >= 0) {
    result += ".";
  }

  if (noralizedAfterFirstDot.length) {
    result += noralizedAfterFirstDot;
  }

  return result;
}

export default function getGroupedNumber(number) {
  const firstDotIndex = number.indexOf(".");
  let beforeFirstDot = number;
  let afterFirstDot = "";

  if (firstDotIndex >= 0) {
    [beforeFirstDot, afterFirstDot] = [number.slice(0, firstDotIndex), number.slice(firstDotIndex + 1)];
  }

  const groupedBeforeFirstDont = String(Number(beforeFirstDot).toLocaleString("en", { useGrouping: true }));

  let result = groupedBeforeFirstDont || "0";

  if (firstDotIndex >= 0) {
    result += ".";
  }

  if (afterFirstDot.length) {
    result += afterFirstDot;
  }

  return result;
}

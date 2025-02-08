import isPrime from "./isPrime";

const getBiggestPrimeBetween = (startNum, endNum) => {
  for (let i = endNum; startNum <= i; i--) {
    if (isPrime(i)) {
      return i;
    }
  }

  return NaN;
};

export default getBiggestPrimeBetween;

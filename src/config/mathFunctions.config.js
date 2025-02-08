import * as calculatorMath from "../utils/math-functions";

export default {
  prime: {
    handler: calculatorMath.prime,
    display: "P",
  },
  divide: {
    handler: calculatorMath.divide,
    display: "/",
  },
  multiply: {
    handler: calculatorMath.multiply,
    display: "*",
  },
  substract: {
    handler: calculatorMath.substract,
    display: "-",
  },
  add: {
    handler: calculatorMath.add,
    display: "+",
  },
}

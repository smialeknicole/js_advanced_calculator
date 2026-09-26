'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(value) {
      this.result = this.result + value;
    },
    subtract(value) {
      this.result = this.result - value;
    },
    multiply(value) {
      this.result = this.result * value;
    },
    divide(value) {
      this.result = this.result / value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;

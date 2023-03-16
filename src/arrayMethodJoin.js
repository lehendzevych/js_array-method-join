'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    this.forEach((element, i) => {
      if (element !== undefined && element !== null) {
        newString += element;
      }

      if (i < this.length - 1) {
        newString += separator;
      }
    });

    return newString;
  };
}

module.exports = applyCustomJoin;

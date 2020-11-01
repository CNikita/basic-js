const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != "string") {
    console.log(false)
    return false
  } else if (!/^[\d]+\.?[\d]*$/.test(sampleActivity)) {
    console.log(false)
    return false
  } else {
    let t = Math.log(15/sampleActivity) / 0.00122;
    console.log(t)
    return t
  }
};

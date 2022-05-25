const leapYears = function(year) {
    // if year is divisible by 4 return true
    // if year is divisible by 100 return false
        // unless year is divisible by 400
    if (year % 4 === 0) {
        if (year % 100 !== 0) return true;
        if (year % 100 === 0 && year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

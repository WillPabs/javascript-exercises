const fibonacci = function(num) {
    if (num == 1 || num == 2) return 1;
    if (num === 0) return 0;
    if (num < 0) return 'OOPS';
    if (typeof num === 'string') num = parseInt(num);
    let a = 1; 
    let b = 1;
    let sum;
    while (num > 2) {
        sum = a + b;
        a = b;
        b = sum;
        num--;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = fibonacci;

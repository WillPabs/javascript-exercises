const palindromes = function (string) {
    let reverse = '';
    let array = Array.from(string);
    for (let i = array.length - 1; i >= 0; i--) {
        reverse = reverse.concat(array[i]);
    }
    return reverse === string ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

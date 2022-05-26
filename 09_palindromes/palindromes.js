const palindromes = function (string) {
    let reverse = '';
    let array = Array.from(string).filter(letter => letter.toUpperCase() !== letter.toLowerCase());
    let newString = '';
    for (let i = array.length - 1, j = 0; i >= 0, j < array.length; i--, j++) {
        reverse = reverse.concat(array[i]);
        newString = newString.concat(array[j]);
    }
    return reverse.toLowerCase() === newString.toLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

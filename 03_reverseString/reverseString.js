const reverseString = function(word) {
    let wordArray = word.split('');
    let newWord = '';
    for (let i = wordArray.length - 1; i >= 0; i--) {
        newWord = newWord.concat(wordArray[i]);
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;

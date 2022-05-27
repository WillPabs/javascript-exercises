const caesar = function(string, move) {
    // alphabet unicode : a-z = 65-122
    let minCode = 65;
    let midMinCode = 90;
    let midMaxCode = 97;
    let maxCode = 122;
    let newString = '';
    let stringArray = Array.from(string);
    console.log('z'.charCodeAt(0));
    stringArray.forEach(char => {
        let code = char.charCodeAt(0);
        let newCode;
        if (code >= minCode && code <= midMinCode) {
            if (code + move > midMinCode) {
                let offset = (code + move) - midMinCode - 1;
                newCode = minCode + offset;
            } else if (code + move < minCode) { 
                // modify to properly account for negative move values
                // https://unicode-table.com/en/#007A
                let offset = (code + move) - midMinCode - 1;
                newCode = minCode + offset;
            } else {
                newCode = code + move;
            }
            let newChar = String.fromCharCode(newCode);
            newString = newString.concat(newChar);
        } else if (code >= midMaxCode && code <= maxCode) {
            if (code + move > maxCode) {
                let offset = (code + move) - maxCode - 1;
                newCode = midMaxCode + offset;
            } else if (code + move < midMaxCode) {
                let offset = (code + move) - maxCode - 1;
                newCode = midMaxCode + offset;
            } else {
                newCode = code + move;
            }
            let newChar = String.fromCharCode(newCode);
            newString = newString.concat(newChar);
        } else {
            newString = newString.concat(char);
        }
    })
    return newString;
};

// Do not edit below this line
module.exports = caesar;

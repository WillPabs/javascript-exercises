const caesar = function(string, move) {
    // alphabet unicode : a-z = 65-122
    let lowerMinCode = 65;
    let lowerMaxCode = 90;
    let upperMinCode = 97;
    let upperMaxCode = 122;
    let range = 26;
    let newString = '';
    let stringArray = Array.from(string);
    stringArray.forEach(char => {
        let code = char.charCodeAt(0);
        let minCode;
        if (code >= lowerMinCode && code <= lowerMaxCode) {
            minCode = lowerMinCode;
        } else if (code >= upperMinCode && code <= upperMaxCode) {
            minCode = upperMinCode;
        }
        let newCode = Math.floor((code + move) / range);
        console.log(newCode + minCode - 1);
        newString = newString.concat(String.fromCharCode(newCode + minCode - 1));
    })



    // we have a range of numbers 65, 90
    // we have a number we want to move each char by
    // we have a string
    // if the number exceeds the bounds it will loop through continously until number is met
    // range length would be upper bounds - lower bounds + 1
    // 165 -26
    // newcode = codepoint + move
    // move = 75
    // code = 72 ; has to stay in range 65 - 90 ; place in range is code - min = 7
    // 



    // let midMaxCode = 97;
    // let maxCode = 122;
    // let newString = '';
    // let stringArray = Array.from(string);
    // console.log('z'.charCodeAt(0));
    // stringArray.forEach(char => {
    //     let code = char.charCodeAt(0);
    //     let newCode = code + move;
    //     let newChar;
    //     // check if code is between min and midMin 
    //     if (code >= minCode && code <= midMinCode) {
    //         // if newCode > midMin
    //         if (newCode > midMinCode) {
    //             // newCode = (newCode - midMin) + min
    //             newCode = (newCode - midMinCode) + minCode;
    //         } else
    //         // if newCode < min
    //         if (newCode < minCode) {
    //             // newCode = (newCode + min) - midMin
    //             newCode = (newCode + minCode) - midMinCode;
    //         };
    //         newChar = String.fromCharCode(newCode);
    //         newString = newString.concat(newChar);
    //     }
    //     // else if code is between midMax and max
    //     else if (code >= midMaxCode && code <= maxCode) {
    //         // if newCode > max
    //         if (newCode > maxCode) {
    //             // newCode = (newCode - max) + midMax
    //             newCode = (newCode - maxCode) + midMaxCode;
    //         } else 
    //         // if newCode < midMax
    //         if (newCode < midMaxCode) {
    //             // new Code = (newCode + midMax) - max
    //             newCode = (newCode + midMaxCode) - maxCode;
    //         }
    //         newChar = String.fromCharCode(newCode);
    //         newString = newString.concat(newChar);
    //     }
    //     // else concat char to newString
    //     else {
    //         newString = newString.concat(char);
    //     }


        // if (code >= minCode && code <= midMinCode) {
        //     if (code + move > midMinCode) {
        //         let offset = (code + move) - midMinCode - 1;
        //         newCode = minCode + offset;
        //     } else if (code + move < minCode) { 
        //         // modify to properly account for negative move values
        //         // https://unicode-table.com/en/#007A
        //         let offset = minCode - (code + move) - 1;
        //         newCode = midMinCode - offset;
        //     } else {
        //         newCode = code + move;
        //     }
        //     let newChar = String.fromCharCode(newCode);
        //     newString = newString.concat(newChar);
        // } else if (code >= midMaxCode && code <= maxCode) {
        //     if (code + move > maxCode) {
        //         let offset = (code + move) - maxCode - 1;
        //         newCode = midMaxCode + offset;
        //     } else if (code + move < midMaxCode) {
        //         let offset = midMaxCode - (code + move) - 1;
        //         newCode = maxCode - offset;
        //     } else {
        //         newCode = code + move;
        //     }
        //     let newChar = String.fromCharCode(newCode);
        //     newString = newString.concat(newChar);
        // } else {
        //     newString = newString.concat(char);
        // }
    // })
    return newString;
};

// Do not edit below this line
module.exports = caesar;

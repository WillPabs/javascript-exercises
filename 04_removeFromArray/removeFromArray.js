const removeFromArray = function(array, ...numToRemove) {
    // find numToRemove in array
    // remove from array
    // return new array without removed num
    
    // declare position array
    // for obj in numToRemove
        // find index of obj in array that matches numToRemove
        // push that index to position array
    // while position array is not empty
        // remove position from array
    // return array

    for (let obj of numToRemove) {
        if (array.includes(obj)) {
            let position = array.findIndex(num => num === obj);
            array.splice(position, 1);
        }
    };

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

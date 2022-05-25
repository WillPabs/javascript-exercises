const getTheTitles = function(array) {
    titlesArray = [];
    array.forEach(book => {
        titlesArray.push(book.title);
    });
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;

const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;
    let age = 0;
    people.forEach(person => {
        if (person.yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            };
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            };
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

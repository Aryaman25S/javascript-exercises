const findTheOldest = function(persons) {
    return persons.reduce((oldest, person) => {
        if(oldest.name === undefined) return person;
        if(oldest.yearOfDeath === undefined) oldest.yearOfDeath = new Date().getFullYear(); 
        const age = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;

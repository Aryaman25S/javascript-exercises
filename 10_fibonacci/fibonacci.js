const fibonacci = function(num) {
    if(num < 0) return 'OOPS';
    if(num <= 2) return 1;
    let prev = 1;
    let prevprev = 1;
    let curr;
    for(let i = 3; i <= num; i++) {
        curr = prev+prevprev;
        prevprev = prev;
        prev = curr;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;

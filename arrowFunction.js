function doubleIt(num) {
    return num * 2;
}

const doubleIt = function(num) {
    return num * 3;
}

const doubleIt = num => num * 4;

const result = doubleIt(50);
console.log(result);

const add = (x, y) => x + y;
const result = add(10, 20);
console.log(result);

const give5 = () => 5;
const result2 = give5();
console.log(result2);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doMath(7, 5);
console.log(result);
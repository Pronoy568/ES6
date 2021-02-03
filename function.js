function add(num1, num2 = 0) {
    // if (num2 == undefined) {
    //     num2 = 0
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(29);
console.log(total);

const firstName = "Promit";
const secondName = "Das";

const fullName = firstName + ' ' + secondName + " is a good boy";
const fullName2 = `${firstName} ${secondName} is a funny boy `;

console.log(fullName);
console.log(fullName2);
//unio and literal
let union: number | string;
union = 2;
union = 'hello';
// union = true;


// function merge(num1: string | number, num2: string | number) {
//     if(typeof num1 === 'string' || typeof num2 === 'string') {
//         return num1.toString() + num2.toString();
//     }else {
//         return num1 + num2;
//     }
// }

// let mergeNumber = merge(2,4);
// let mergeString = merge('hello', 'world');

// console.log(mergeNumber);
// console.log(mergeString);

//literal
let union3:0|1|2
union3=1;
// union3=4;


let literal: 1 | "2" | true

function merge(num1: string | number, num2: string | number, resultType: 'as-number' | 'as-string') {
    if(resultType === 'as-string') {
        return num1.toString() + num2.toString();
    }
    if(typeof num1 === 'string' || typeof num2 === 'string') {
        return num1.toString() + num2.toString();
    }else {
        return num1 + num2;
    }
}

let mergeNumber = merge(2,4,'as-number');
let mergeNumber2 = merge(2,4,'as-string');
let mergeString = merge('hello', 'world', 'as-string');

console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);


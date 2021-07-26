// void, undefined and never
// function printResult(): void {
//     console.log('lalala')
// }
// console.log('print:', printResult())
function printResult() {
    console.log('lalala');
    return;
}
console.log('print:', printResult());

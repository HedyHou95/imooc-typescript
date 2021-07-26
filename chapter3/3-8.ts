// void, undefined and never
// function printResult(): void {
//     console.log('lalala')
// }

// console.log('print:', printResult())

function printResult(): undefined {
    console.log('lalala')
    return 
}

console.log('print:', printResult())

function throwError(message: string, errorCode: number):never {
    throw{
        message,
        errorCode
    }
}

throwError('not found', 404);
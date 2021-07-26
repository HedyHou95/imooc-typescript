//function

let log = function(message) {
    console.log(message);
}

let log2 = (message:string)=>{
    console.log(message)
}

log2('hello');
log2(2);


let log3 = (message:string, code?: number)=>{
    console.log(message, code)
}

log3('hello')
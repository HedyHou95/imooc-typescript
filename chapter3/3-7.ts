// any and unkonwn
// let randomValue: any = 666;
// randomValue = true;
// randomValue = '1';
// randomValue = {};
// randomValue();
// randomValue.toUpperCase();

let randomValue: unknown = 666;
randomValue = true;
randomValue = '1';
randomValue = {};
if(typeof randomValue === 'function') {
    randomValue()
}
if(typeof randomValue === 'string') {
    randomValue.toUpperCase();
}


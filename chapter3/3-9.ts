// 类型适配 type assertions
let message: any;
message = 'hello';
message.endsWith('0');

let info = (<string>message).endsWith('0');
let info2 = (message as string).endsWith('0');
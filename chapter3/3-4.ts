// Array and Tuple
let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4];
let list3 = [1,2,3,4];

let list4 = [1,'dd'];
let list5: any[] = [1,'2', true];


// Tuple: the length and type is not mutable
let person1: [number, string] = [1,'hello'];
person1[0] = 'world';
person1[1] = 2;
person1[2] = 3;
person1.push(4); // tupple has bug


// should define type, otherwile it is an array
let person2 = [2,'h'];
person2[0] = 'e';
person2[1] = 1;
person2[3] = 4;

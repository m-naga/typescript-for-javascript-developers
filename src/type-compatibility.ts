export { };
  
// 型の互換性

let fooCompatible: any;
let barCompataible: string = 'TypeScript';

console.log(typeof fooCompatible);

// string型を代入したのでstring型になる
fooCompatible = barCompataible
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barInompataible: number = 1;

// fooIncompatible = barInompataible

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral

let fooNumber: number;
let fooNumberLiteral: 1978 = 1978;
fooNumber = fooNumberLiteral

interface Animal {
  age: number;
  name: string;
}

class  Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'はむさん');

console.log(me);

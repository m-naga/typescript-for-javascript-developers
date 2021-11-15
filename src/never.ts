export {};

function error(message: string): never {
  throw new Error(message)
}

try {
  let result = error('test')
  console.log(result);
  console.log('try!!!!');
} catch (error) {
  console.log('error!!!!');
  console.log({ error }); 
}

let foo: void = undefined;
// let bar: never = undefined;
// let bar: never = null;
let bar: never = error('only me!');
// never はエラーのみにつかう型
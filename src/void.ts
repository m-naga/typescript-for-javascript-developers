export {};

function returnNoting(): void {
  console.log("I don't return anything!");

// return を記載しなくても暗黙的に return undefined が常にある
}

console.log(returnNoting());

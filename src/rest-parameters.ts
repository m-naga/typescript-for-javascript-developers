export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log(({ accumulator, currentValue }));
  return accumulator + currentValue;
}

// RestParamerters: 不特定多数の引数を配列として受け取る構文
const sum: (...values: number[]) => void = (...values: number[]) => {
  // console.log(values);
  return values.reduce(reducer)
}

console.log(sum(1,2,3,4,5));

// console.log([1, 2, 3, 4].reduce(reducer));
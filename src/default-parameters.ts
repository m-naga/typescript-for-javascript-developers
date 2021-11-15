export {};

// 関数に値が渡されない場合、デフォルトh引数を使う

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate
}

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));

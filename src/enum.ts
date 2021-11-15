export {};

// enum型 数字が文字列を列挙する時に便利

enum Months {
  January = 1,
  Fabruary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.Fabruary);
console.log(Months.December);

enum  COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLORS.GREEN
console.log({green});

// COLORS.YELLOW;
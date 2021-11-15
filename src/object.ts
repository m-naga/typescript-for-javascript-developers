export {};

// この書き方は制約が甘い
let profile1: object = { name: 'Ham' }
profile1 = { brithYear: 1966 };
// console.log(profile1);

// この書き方は制約が甘い
let profile2: {} = { name: 'Ham' }
profile2 = { brithYear: 1966 };
// console.log(profile2);

// この書き方を推奨
let profile3: { name: string; } = { name: 'Ham' }
// profile3 = { brithYear: 1966 };
profile3 = { name: 'Ushi' };
console.log(profile3);

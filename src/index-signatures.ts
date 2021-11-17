export { };
  
// インデックスシグネチャ
  
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// let profile: { name?: string } = {};
let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeForindex ]: typeForValue}

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
export {};

// Utility Type

type Profile = {
  name: string;
  age: number;
  zipCode: number;
}

type Profile2 = {
  name?: string;
  age?: number;
}

// PartialType をつかう 
// 自動的にプロパティに？がつく
type PartialType = Partial<Profile>;

// RequiredType
// Partialと逆で、プロパティから？が外れる
type RequiredType = Required<Profile2>;
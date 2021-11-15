//　タイプエリアスを使ってアノテーションを行う

export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 44
};

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 44
};

type Profile2 = typeof example1;
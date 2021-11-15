//　オプジェクトに対してアノテーションを行う方法（タイプエイリアスとはまた別の方法）

export {};

// タイプエイリアス

type ObjectType = { 
  name: string; 
  age: number; 
}

let object: ObjectType = {
  name: 'Ham-san',
  age: 44
}

// インターフェース

interface ObjectInterface {
  name: string; 
  age: number; 
}


let object2: ObjectInterface = {
  name: 'Ham-san',
  age: 44
}

// Type Alias は型に名前をつけるもの、 
// Interface は構造を定義するもの
// 例えばオブジェクトの宣言時などは Interface を使用するなどして、ケースバイケースで使い分けると良い
// グローバル空間に定義炭の変数を使わないように、モジュールシステムを導入する
export {};

let name: string = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });

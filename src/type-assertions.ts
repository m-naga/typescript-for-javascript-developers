export { };

// 型アサーション
// 型に互換性があるので意図しないエラーが発生する。
// 意図しない型変更を防ぐためにアサーションをする。

let name: any = 'Ham';
// let length: number = name.length;
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length;
length = 'foo';
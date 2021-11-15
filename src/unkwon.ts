export {};

const kasu = (): number => 43;

let numberAny: any = kasu();
let numberUnknown: unknown = kasu();

let sumAny = numberAny + 10;
console.log(sumAny);

// unknown型なので数字ではないかもしれないので演算できないと怒っている
// let sumUnknown = numberUnknown + 10;
console.log(typeof numberUnknown);

if(typeof numberUnknown === 'number') {
  // if と typeof で number であることがわかったので演算できるようになった
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown); 
}

// typeof を使って型を確認しながら安全を確保することを Type Guard という
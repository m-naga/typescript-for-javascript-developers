export { };

class VisaCard {
  // readonly owner: string;

  // constructor(owner: string) {
  //   this.owner = owner;
  // }
  
  constructor(readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
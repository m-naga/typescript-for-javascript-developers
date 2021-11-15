export { };

class Me {
  static isProgramer: boolean = true
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // return 'Hey, guys! Are you interested in TypeScript?'
    // return `Hey, ${Me.firstName}! Are you interested in TypeScript?`
    return `Hey, ${this.firstName}! Are you interested in TypeScript?`
  }
}

let me = new Me();
console.log(me);
// スタティックなメンバに対してアクセスできない。
// console.log(me.isProgramer);

// static なメンバに対してアクセスする
console.log(Me.isProgramer);
console.log(Me.work());


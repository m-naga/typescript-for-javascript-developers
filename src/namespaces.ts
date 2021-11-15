export { };

// namespaces による名前空間

namespace Japanese {
  // namespace の中に namespase を作れる. exort が必要 
  export namespace Tokyo {
    // 外側からアクセスできるように export が必要
    export class Person {
      constructor(public name: string) {}
    }
  }
  // namespace の中に namespase を作れる. exort が必要 
  export namespace Osaka {
    // 外側からアクセスできるように export が必要
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  // 外側からアクセスできるように export が必要
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);

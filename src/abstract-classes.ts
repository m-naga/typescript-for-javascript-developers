export {};

abstract class Animal {
  abstract cry(): string;
}

// abstract は必ずオーバーライドしないといけない
class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}
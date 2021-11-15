export { };

class Mahotsukai {};
class Souryo {};

// クラスは1つしか継承できないのでエラーになる
// class Taro extends Mahotsukai, Souryo {}

interface Kenja {
  ionazun(): void;
};

interface Senshi {
  kougeki(): void;
};

// インターフェースは複数継承できる。厳密には複数の継承のようなものができる
class Jiro implements Kenja, Senshi {
  ionazun(): void{
    console.log('ionazun')
  }
  kougeki(): void{
    console.log('kougeki')
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
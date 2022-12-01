// 클래스
// - 객체를 생성하는 템플릿
// 클래스: 붕어빵 틀
// 객체: 붕어빵

class Cat {
  
  // 생성자
  constructor(name, age) {
    // 속성
    this.name = name;
    this.age = age;
  }

  // 메서드
  mew() {
    return '야옹~';

  }

  eat() {
    return '냠냠';
  }
};

let navi = new Cat('양고', 2);
let nayng = new Cat('냥이', 3);
console.log(navi.name);
console.log(navi.age);
console.log(navi.mew());
console.log(navi.eat());

console.log(nayng.age);
console.log(nayng.name);
console.log(nayng.mew());
console.log(nayng.eat());

// 연습
// Person 클래스
// 속성: 이름, 성별
// - 메서드: study()
// Person 클래스로 만들어진 객체
// - Jaein
// - Ian

class Person {
  // 속성
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  };
  // 메서드
  study() {
    return '공부하자!'
  };
};

let Jane = new Person('재인', '여성');
let Ianny = new Person('이안', '남성');

console.log(Jane.name);
console.log(Ianny.name);
console.log(Jane. study());


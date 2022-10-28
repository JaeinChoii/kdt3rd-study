// #1 setTimeout()
// setTimeout(code, delay)
// :delay(단위 ms)동안 기다리다가 code 함수 실행

/*
console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);
console.log(3);
*/

// #2 비동기 처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황
/* function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.')
}

function pickDrink() {
  // 3초 고민하는 상황
  setTimeout(function () {
    console.log('고민 끝!');
    product = '제로 콜라';
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink();
pay(product, price); */

// #3 콜백 함수
// - 다른 함수의 실행이 끝난 뒤 실행되는 함수
// - js에서는 어떤 함수의 "매개변수"로 쓰일 수 있음

// 위 예시 코드에서 undefined가 뜨지 않도록 해보자!
// 즉, 비동기 방식으로 작업되니, 코드를 "동기 처리"할 수 있도록 변경

/* 
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.')
}

function pickDrink(callback) { //pay
  // *callback: 매개변수가 될 콜백 함수
  // 3초 고민하는 상황
  setTimeout(function () {
    console.log('고민 끝!');
    product = '제로 콜라';
    price = 2000;
    callback(product, price); //pay
  }, 3000);
}

function pay(product, price) {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink(pay);
*/

// #4 콜백 지옥 (callback hell)
// : 콜백 함수가 반복되어 코드의 들여쓰기가 깊어짐
// -> 가독성과 유지보수성 하락
// 1초마다 배경색이 변경되는 코드
// red -> orange -> yellow -> green -> blue

// 1초 기다렸다가 body 배경색이 red로 변경
// setTimeout(code, delay)
setTimeout(function () {
  document.body.style.backgroundColor = 'red';
  setTimeout(function () {
    document.body.style.backgroundColor = 'orange';
      setTimeout(function () {
        document.body.style.backgroundColor = 'yellow';
          setTimeout(function () {
            document.body.style.backgroundColor = 'green';
              setTimeout(function () {
                document.body.style.backgroundColor = 'blue';
              }, 1000);
          }, 1000);
      }, 1000);
  }, 1000);
}, 1000);

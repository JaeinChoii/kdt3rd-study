console.log('!');

// JS 표준 내상 객체
// 기본적으로 (이미) 가지고있는 객체
// String, Number, Array, Date, Math, ....

// ========================================================
// Date 객체
// 시간, 날짜에 대한 정보를 얻기 위함

let now = new Date();
console.log(now);

// ()의 단위는 ms
// 1970-01-01 09:00:00를 기준으로 시간 계산
console.log(new Date((0))); // 1970-01-01 09:00:00를 기준
console.log(new Date((80000))); // 1970-01-01 09:01:20

// new DAte(y, m, d, h, m, s, ms)
// year: 4자리
// month: 0(1월)~11(12월) -> 주의!
// date: 1~31 -> 생략하면 1으로 처리
// hour, minutes, seconds, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));

console.log(new Date(2022, 8, 30, 10, 53));

// Date 객체 메서드
// 메서드를 이용해서 년, 월, 일 등의 값을 얻기
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth()); // 0(1월) ~ 11(12월)
console.log(now.getDate()); 
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 요일: 0(일) ~ 6(토)


// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문

console.log(now.getDay());


switch(now.getDay()) {
    case 0:
    case 6:
       console.log('주말');
       break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: 
       console.log('평일');
       break;
    default:
       console.log('알 수 없음')
       break;
  }


if (now.getDay() === 0|| now.getDay() === 6) {
    console.log('주말')
  } else {
    console.log('평일')
  }


// Math 객체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성
console.log(Math.E); // 자연로그 밑
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드
console.log(Math.min(100, 200, 30, 7)); // 최소값
console.log(Math.max(100, 200, 30, 7)); // 최대값
console.log(Math.round(6.5)); // 반올림
console.log(Math.floor(6.5)); // 내림
console.log(Math.floor(6.3)); // 내림
console.log(Math.ceil(6.5)); // 올림
console.log(Math.ceil(6.3)); // 올림

// 메서드를 메서드로 감싸서도 사용 가능
console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7)))
console.log(Math.floor(7.7))
console.log(7)

console.log(Math.random()) // 0 <= x < 1 범위의 난수

// 0 <= 10y < 10

console.log(Math.floor(Math.random() * 10))

// 퀴즈) Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1)

// 퀴즈) Returns a random integer from 1 to 100:
console.log(Math.floor(Math.random() * 100) + 1)

// 퀴즈) Returns a random integer from 20 to 22:
console.log(Math.floor((Math.random() * 3) + 20))

// 0 * 3 + 20 0 <= y < 3 + 20

// 구조 분해 할당

// 1. 배열 구조 분해
// - 순서가 중요
// - 변수의 순서와 요소의 순서가 일치해야 함
// - 없는 값은 undefined
// - 기본 값 설정 가능
const lists = ['apple', 'grape'];
[item1, item2, item3 = 'peach'] = lists;
console.log('item1:', item1);
console.log('item2:', item2);
console.log('item3:', item3);

// Swap: 두 변수의 값 교환
let x = 1, y = 2;
[x, y] = [y, x];
console.log('x: ', x);
console.log('y: ', y);

// 2. 객체 구조 분해
// 키 값과 변수명 일치해야 함!! 순서 x
// - 없는 키 값을 변수로 받으면 undefined
const obj = {
    key1: 'one',
    key2: 'two',
};
const { key1, newKey1, key2, key3 = 'three' } = obj;
console.log(key1);
console.log(newKey1);
console.log(key2);
console.log(key3);

const { a, b } = { a: 10, b: 20 };
console.log(a);
console.log(b);

// 구조 분해 할당 배열에서 사용 방법 복습!

const arr = ['a', 'b', 'c'];

// Before
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// After
const [one, two, three] = arr;
console.log(one);
console.log(two);
console.log(three);

// After2
const [one2, two2, three2, four2 = 'hello'] = arr;
console.log(one2);
console.log(two2);
console.log(three2);
console.log(four2);

// 구조분해 할당 객체!
// 객체에서는 키 값을 기준으로 전달받으므로 순서가 중요하지 않음! 배열과 다름!!
const tv = {
    name: 'samsung tv',
    price: 300,
    size: '76',
    store: 'samsung'
};

// [Before]
// ver1. 점 연산자
console.log(tv.name);
console.log(tv.price);
console.log(tv.size);
console.log(tv.store);
// ver2. 대괄호 표기법
console.log(tv['name']);
console.log(tv['price']);
console.log(tv['size']);
console.log(tv['store']);

// [After]
// key: 변수명 -> 새로운 변수명을 "키"로 사용
// key = "value" -> 새로운 키에 대한 값을 설정
let { price: p, size, store, name, owner= 'Jaein' } = tv; // name의 위치를 바꿨어도 값이 나옴
console.log(name);
console.log(p);
console.log(size);
console.log(store);
console.log(owner);

// spread 연산자
// : 값을 펼치는 연산자

// object
const defualtInfo = {
    price: 2000,
    store: 'ceo'
  };
  
  const chocoIcecream = {
    ...defualtInfo,
    flavor: 'choco',
  
  };
  
  const strawberryIcecream = {
    ...defualtInfo,
    flavor: 'strawberry',
  };
  
  
  const mangoIcecream = {
    ...defualtInfo,
    flavor: 'mango',
  
  };
  
  console.log(chocoIcecream);
  console.log(strawberryIcecream);
  console.log(mangoIcecream);
  
  
  // array 배열
  const nums1 = ['one', 'two', 'three']
  const nums2 = ['four', 'five', 'six']
  
  const nums = [...nums1, ...nums2, 'seven']
  console.log(nums);
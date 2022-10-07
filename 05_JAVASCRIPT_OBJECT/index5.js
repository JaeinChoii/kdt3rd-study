console.log('!');

function addNode() {
    // alert('버튼을 클릭하셨군요!');
    let div = document.getElementById('div1');
    // 요소 생성하기
    // creatElement()
    let p = document.createElement('p'); // p 태그 생성 <p></p>
    p.innerText = '버튼을 눌러 만들어진 p 태그'; // <p>버튼을 눌러 만들어진 p 태그</p>
    p.style.fontWeight = '700';
    p.classList.add('append-p');
    // div.appendChild(p);
    // div.append('1번추가');
    // div.append(p, '2번추가');
    div.append(p);
}

function removeNode() {
    // alert('삭제 버튼 클릭!');
    let div = document.querySelector('#div1');
    let p = document.querySelector('#div1 > p');

    // div.removeChild(p);
    p.remove(); // div.removeChild(p)와 동일
}

// 노드 생성/추가/삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한 번에 한개
// append(): 노드 객체 or 텍스트 추가, 한 번에 여러개 가능

// 3. 노드 삭제
// 부모노드.removeChild(자식노드): 선택한 부모요소의 자식노드 삭제
// 노드.remove(): "선택한 요소" 삭제

// =====================================
let ul = document.querySelector('ul');
let li = document.createElement('li'); // <li></li>
li.innerText = '오렌지'; // <li>오렌지</li>

ul.append(li);

// =====================================
let container = document.querySelector('.container');
let img = document.createElement('img'); // <img></img>
img.setAttribute('src', './image/mal.png'); // <img src= "./image/mal.png">
img.setAttribute('alt', '강아지'); // <img src= "./image/mal.png" alt="강아지">
let title = document.createElement('div'); // <div></div>
title.innerText = '강아지입니다.' // <div>강아지입니다.</div>

container.append(img);
container.append(title);

// =====================================
let mirror = document.querySelector('.mirror');
let li2 = document.createElement('li');
li.innerText = '얼굴';

mirror.append(li);

// =====================================
let dog = document.querySelector('.dog');
let img2 = document.createElement('img');
img2.setAttribute('src', './image/corgi.jpg');
img2.setAttribute('alt', '강아지2');
img2.setAttribute('width', '400');


dog.append(img2);
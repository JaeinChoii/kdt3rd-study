const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 함수 선언
// 1) 명시적 함수 선언
// function func_nam() { ... }
// 2) 함수 표현식
// const var_name = function () { ... }

// 2 변형) 화살표 함수
// : 함수 표현식을 더 단순하게 작성해보자!
// const f = () => { ... }
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(cookieParser());
// 옵션 객체 설정
const cookieConfig = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능 (js에서 접근 불가능)
  maxAge: 10 * 1000, // 1min: 유효 시간 (단위: 밀리초) 86400: 하루
  // expires: 만료 날짜 설정
    
};

app.get('/', (req, res) => {
  // req.cookies.popup
  // 쿠키 설정시; 'hide'
  // 쿠키 미설정시; ''
    res.render('index', { popup: req.cookies.popup });
});

app.post('/setCookie', (req, res) => {
    // 쿠키 설정: popup 쿠키의 값을 설정
    res.cookie('popup', 'hide', cookieConfig); // 쿠키 설정
  // 응답: '쿠키 설정 성공!' 메세지를 응답으로 보냄
    res.send('쿠키 설정 완료~');
  }); 

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
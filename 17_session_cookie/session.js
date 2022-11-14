const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

// session({ 세션모듈_옵션})
// - secret: 세션 발급 시 사용되는 키! -> 필수 값
// - resave: 매 요청마다 세션을 다시 저장할 것인지 설정
// - saveUninitialized: 초기 값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 것인지 설정
// - secure: ture 설정 시 https에서만 세션을 주고 받음
// - name: 세션 쿠키명 (connect.sid 이지만 다른 이름 부여 가능)
app.use(session({
  secret: 'secretKey', // 세션 암호화에 사용하는 키
  resave: false,
  saveUninitialized: true,
  name: 'my-session',
})
); 

// req.session: "사용자별"로 해당 객체 안에 세션 정보 들어있음
// 세션 쿠키 설정
// req.session.키 = 값

// 세션 쿠키 사용
// req.session.키

// 세션 삭제
// req.session.destroy(콜백함수)
// - 콜백함수: 세션 삭제 시 호출할 콜백 함수

app.get('/', (req, res) => {
  // 세션 설정
  req.session.name = '최재인';

  // 응답 보냄
  res.send('세션 설정 완료!');
});

app.get('/name', (req, res) => {
  res.send(req.session.name);
});

// app.get('/sid', (req, res) => {
//   res.send(req.sessionID);
// });

app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }

    // 1. GET /: name 세션 설정
    // 2. GET /name: name 값 확인
    // 3. GET /destroy: 세션 사제
    // 4. GET /name: name 확인 불가
    res.send('세션 삭제 완료!')
    // res.redirect('/'); // 경로 리다이렉트
    
  });
});


app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
const express = require('express');
const sessions = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sessions({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
})
);

// (임시) DB에 저장되어 있는 유저 정보
const userInfo = { id: 'a', pw: '1' };

app.get('/', function (req, res) {
  const user = req.session.user;
  console.log('req.session.user >> ', req.session.user);
  // 세션 설정 x -> undefined
  // 세션 설정 x -> userInfo.id 값

  if (user !== undefined) {
  // 세션 값이 있으면, index.ejs render { isLogin: true, user: user }
    res.render('index', { isLogin: true, user: user})
  } else {
  // 세션 값이 없으면, index.ejs render { isLogin: false }
    res.render('index', { isLogin: false })
  };
});

app.get('/login', function (req, res) {
  res.render('login');
});

// POST /login
// 로그인 정보 일치; 세션설정
// 로그인 정보 불일치; / 경로 이동
app.post('/login', (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  if (req.body.id == userInfo.id && req.body.pw === userInfo.pw) {
  // 로그인 정보 일치
  // - req.session.user 저장
  req.session.user = req.body.id // 세션 설정
  // - / 리다이렉트
    res.redirect('/');
  } else {
  // 로그인 정보 일치 x
  // - alert
  // - / 경로로 이동
    res.send(`
      <script>
        alert('로그인 실패!');
        document.location.href = '/';
      </script>
    `);
  };
});

// GET /logout
app.get('/logout', (req, res) => {
  const user = req.session.user;
  console.log('GET /logout | req.session.user >> ', user);
  // 'a'
  // undefined

  if (user !== undefined) {
    // req.session.destroy(콜백)
    // 콜백 안에서 로그아웃 -> / 리다이렉트
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }

      console.log('세션을 지운 후, req.session.user >> ', user); // undefined
      res.redirect('/');
    });
  } else {
    // 유저가 브라우저에서 /logout 경로로 직접 접근
    // res.send()
    // - alert('잘못된 접근입니다!')
    // - / 경로 이동
    res.send(
      `<script>
        alert('잘못된 접근입니다!');
        document.location.href = '/';
      </script>`
    );
  };
});


app.listen(PORT, () => {
  console.log(`http://localhost/8000`);
})
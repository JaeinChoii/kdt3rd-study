const express = require('express');
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require('http').Server(app);
const io = require('socket.io')(http); // http-socket 연결
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('chat');
});

// io.on()
// : socket과 관련된 통신작업을 처리
io.on('connection', (socket) => {
  // "connection" event
  // : 클라이언트가 서버에 접속했을 때 발생, 콜백으로 socket 객체를 제공!

  console.log('**** Server Socket Connected >>', socket.id);
  // socket.id: 소켓 고유 아이디 -> socket은 웹 페이지 별로 생김

  // [실습 42]
  socket.on('hello', (data) => {
    // console.log('socket on hello >> ', data);
    console.log(`${data.who} : ${data.msg}`);
    socket.emit('helloKr', { who: 'hello', msg: '안녕~~!' });
  });

  socket.on('study', (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit('studyKr', { who: 'study', msg: '공부하자~~!' });
  });

  socket.on('bye', (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit('byeKr', { who: 'bye', msg: '잘가~~!' });
  });
});

// 주의!!) socket을 사용하려면 http.listen()으로 포트를 열여야 함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
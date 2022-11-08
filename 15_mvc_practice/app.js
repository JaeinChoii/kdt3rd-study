const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routes');
// 기본 경로: localhost:PORT
app.use('/', userRouter);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

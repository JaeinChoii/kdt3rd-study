// 15_mvc_mysql_practice/controller/Cuser.js 변형
const models = require('../models');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send(true);
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signin = (req, res) => {
  console.log(req.body);

  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);

  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log('post_profile >> ', result);
    // 이제 더 이상 결과가 [ {} ]가 아니라 {}
    if (result) {
      res.render('profile', { data: result }); // 주의) [0] 인덱싱 필요 없음!
    }
  });
};

exports.edit_profile = (req, res) => {
  console.log(req.body);

  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    res.send('회원정보 수정 성공!');
  });
};

exports.delete_profile = (req, res) => {
  console.log(req.body);

  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send('회원 탈퇴 완료!!');
  });
};

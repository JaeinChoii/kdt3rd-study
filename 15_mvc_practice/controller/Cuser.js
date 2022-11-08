const User = require('../model/User');

console.log(User);

exports.main = (req, res) => {
    res.render('index', { title: '동적 폼 실습' });
};

exports.practice30 = (req, res) => {
    console.log(req.body);
    if (realId === req.body.userId && realPw === req.body.userPw) {
        res.send({ userInfo: req.body, isSuccess: true });
    } else {
        res.send({ isSuccess: false });
    }
};
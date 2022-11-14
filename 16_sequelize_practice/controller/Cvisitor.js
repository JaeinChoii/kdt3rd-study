const models = require('../models');

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  models.Visitor.findAll().then((result) => {
    console.log('findAll >> ', result); // findAll >> [ {}, {}, {}, {}, ... ]
    res.render('visitor', { data: result });
  });
};

// (6) GET /visitor/get => localhost:PORT/visitor/get?id=N
exports.getVisitor = (req, res) => {
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log('findOne >> ', result);
    res.send(result);
  });
};

// (3) POST /visitor/write => localhost:PORT/visitor/write
exports.postVisitor = (req, res) => {
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log('create >> ', result);
    res.send(result);
  });
};

// (4) PATCH /visitor/edit => localhost:PORT/visitor/edit
exports.patchVisitor = (req, res) => {
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => {
    res.send('수정 성공!!');
  });
};

// (5) DELETE /visitor/delete => localhost:PORT/visitor/delete
exports.deleteVisitor = (req, res) => {
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then(() => {
    console.log('destroy >> ', result);
    res.send('삭제 성공!!');
  });
};

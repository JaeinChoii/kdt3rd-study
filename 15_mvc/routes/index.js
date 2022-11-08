const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// module.exports를 통해서 router 등록
// -> 다른 파일에서도 사용 가능

module.exports = router;
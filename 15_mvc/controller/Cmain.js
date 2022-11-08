const Comment = require('../model/Comment');

exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req, res) => {
    console.log(Comment.commentInfos());
    res.render('comments', { commentInfos: Comment.commentInfos() });
};

exports.comment = (req, res) => {
    console.log(req.params); 
    console.log(req.params.id); 

    const comments = Comment.commentInfos();
    const commentId = req.params.id; 
    console.log(comments[commentId - 1]); 
    
    if (commentId < 1 || commentId > comments.length) {
        return res.render('404');
    };

    if (isNaN(commentId)) { //
        return res.render('404');
    };

    res.render('comment', { commentInfo: comments[commentId - 1]});
};
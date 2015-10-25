var Comment = require('../models/comment.js');
var express = require('express');


// COMMENTS ROTING ------------------------------------------
var create = function (router) {
    router.route('/comments')

    // create a comment (accessed at POST http://localhost:8080/api/comments)
        .post(function (req, res) {

            var comment = new Comment();      // create a new instance of the comment model
            comment.Comment = req.body.Comment;  // set the comment name (comes from the request)
            comment.Author = req.body.Author;
        
            // save the bear and check for errors
            comment.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'comment created!' });
            });

        })
    // get all the bears (accessed at GET http://localhost:8080/api/comments)
        .get(function (req, res) {
            Comment.find(function (err, comments) {
                if (err)
                    res.send(err);

                res.json(comments);
            });
        });
    
    // ----------------------------------------------------
    router.route('/comments/:id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/comments/:id)
        .get(function (req, res) {
            Comment.findById(req.params.id, function (err, comment) {
                if (err)
                    res.send(err);
                res.json(comment);
            });
        })
    // update the bear with this id (accessed at PUT http://localhost:8080/api/comments/:id)
        .put(function (req, res) {

            // use our bear model to find the comment we want
            Comment.findById(req.params.id, function (err, comment) {

                if (err)
                    res.send(err);

                comment.Comment = req.body.Comment;  // update the comment info
                comment.Author = req.body.Author;

                // save the bear
                Comment.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'comment updated!' });
                });

            });
        })
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:id)
        .delete(function (req, res) {
            Comment.remove({
                _id: req.params.id
            }, function (err, comment) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });
};

module.exports = create; 
	
	

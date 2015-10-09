var express = require('express');
var User = require('../models/user.js');
var Comment = require('../models/comment.js');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/users')

// create a user (accessed at POST http://localhost:8080/api/users)
    .post(function (req, res) {

        var user = new User();      // create a new instance of the User model
        user.name = req.body.name;  // set the user name (comes from the request)

        // save the bear and check for errors
        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'user created!' });
        });

    })
// get all the bears (accessed at GET http://localhost:8080/api/users)
    .get(function (req, res) {
        User.find(function (err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });
    
// ----------------------------------------------------
router.route('/users/:id')

// get the bear with that id (accessed at GET http://localhost:8080/api/users/:id)
    .get(function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    // update the bear with this id (accessed at PUT http://localhost:8080/api/users/:id)
    .put(function(req, res) {

        // use our bear model to find the user we want
        User.findById(req.params.id, function(err, user) {

            if (err)
                res.send(err);

            user.name = req.body.name;  // update the user info

            // save the bear
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:id)
    .delete(function(req, res) {
        User.remove({
            _id: req.params.id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
    
    
// COMMENTS ROTING ------------------------------------------

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
    .put(function(req, res) {

        // use our bear model to find the comment we want
        Comment.findById(req.params.id, function(err, comment) {

            if (err)
                res.send(err);

            comment.Comment = req.body.Comment;  // update the comment info
            comment.Author = req.body.Author;

            // save the bear
            Comment.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'comment updated!' });
            });

        });
    })
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:id)
    .delete(function(req, res) {
        Comment.remove({
            _id: req.params.id
        }, function(err, comment) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    }); 
    
    

module.exports = router;

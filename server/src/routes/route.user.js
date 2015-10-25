var User = require('../models/user.js');

var create = function(router)
{

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
};
    
    module.exports = create;
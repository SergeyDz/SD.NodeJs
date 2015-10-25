var Request = require('../models/request.js');

var create = function(router)
{

router.route('/requests')

// get all the bears (accessed at GET http://localhost:8080/api/users)
    .get(function (req, res) {
        Request.findAll().then( function(data) {
             res.json(data);
        });
        
    });
 
};
    
    module.exports = create;
var createUser = require('../controllers/userc');
module.exports = {
    //set up route configuration that will be handle by express server   
    configure: function (app) {
        app.post('/api/register', function (req, res) {
            createUser.registeruser(req, res);
        });
        app.get('/api/getuser', function (req, res) {
            createUser.getAlluser(req, res);
        });
        app.get('/api/getUserByID/:id', function (req, res) {
            createUser.getUserByID(req, res);
        });
        app.patch('/api/updatedata/:id', function (req, res) {
            createUser.updatedata(req, res);
        });
        app.delete('/api/deleteUserData/:id', function (req, res) {
            createUser.deleteUserData(req, res);
        });
    }
}
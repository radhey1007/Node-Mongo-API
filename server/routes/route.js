var createUser = require('../controllers/userc');
var createPosition = require('../controllers/positionc')
var createDepartment = require('../controllers/departmentc')
module.exports = {
    //set up route configuration that will be handle by express server   
    configure: function (app) {

        /*********** User Detail Controller Begin  ************/
        app.post('/api/register', function (req, res) {
            createUser.registeruser(req, res);
        });  
        app.post('/api/login', function (req, res) {
            createUser.login(req, res);
        });
        app.get('/api/getuser', function (req, res) {
            createUser.getAlluser(req, res);
        });
        app.get('/api/fetchinfo', function (req, res) {
            createUser.fetchinfo(req, res);
        });
        app.get('/api/getUserByID/:id', function (req, res) {
            createUser.getUserByID(req, res);
        });
        app.patch('/api/updatedata/:id', function (req, res) {
            createUser.updatedata(req, res);
        });
        app.patch('/api/multipleuserdelete', function (req, res) {
            createUser.multipledeleteuserData(req, res);
        });
        app.delete('/api/deleteUserData/:id', function (req, res) {
            createUser.deleteUserData(req, res);
        });
       

        /*********** Position Table Detail Controller Begin  ************/
        app.post('/api/registerposition', function (req, res) {          
            createPosition.postpostion(res,req);
        });
        app.get('/api/getposition', function (req, res) {
            createPosition.getAllPosition(req, res);
        });
        /*********** Department Table Detail Controller Begin  ************/

        app.post('/api/registerdepartment', function (req, res) {          
            createDepartment.postdepartment(res,req);
        });
        app.get('/api/getdepartment', function (req, res) {
            createDepartment.getAlldepartment(req, res);
        });
    }
}
// import express from 'express';
// //import { createUser } from '../controllers/userc';
var createUser = require('../controllers/userc');
// const router = express.Router();
// router.post('/register', createUser);
// export default router;

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
    }
}
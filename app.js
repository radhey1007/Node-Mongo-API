// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
//import router from './server/routes/route';
var routes = require('./server/routes/route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up mongoose
mongoose.connect('mongodb://ankit1992:sba18430ankit@ds125362.mlab.com:25362/ngcrud',{useNewUrlParser:true})
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
  routes.configure(app);
  //app.use('/api/', router);
// set up port
const port = 5035;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Mongo Project Management ',
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Our server is running on port ${port}`);
});
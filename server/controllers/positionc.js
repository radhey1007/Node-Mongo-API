import mongoose from 'mongoose';
import Position from '../models/position';

function createPosition(){

    this.postpostion=(res,req)=>{
      console.log(req.body)
        const position = new Position({
            _id: mongoose.Types.ObjectId(),
            pkid: req.body.pkid,
            name: req.body.name,           
            isActive:true
        });
        return position
        .save()
        .then((newCause) => {
          return res.status(201).json({
            success: true,
            message: 'position created successfully',
            position: newCause,
          });
        })
        .catch((error) => {
          res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: error.message,
          });
        });
    }

    this.getAllPosition=(req,res)=>{

      return Position.find().then((resd)=>{
           return res.status(201).json({
               success: true,
               message: 'Position table fetched successfully',
               Position: resd,
             });
       }).catch((err)=>{
           res.status(500).json({
               success: false,
               message: 'Server error. Please try again.',
               error: err.message,
             });
       })
   }
}
module.exports = new createPosition();
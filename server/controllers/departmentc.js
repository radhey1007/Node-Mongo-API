import mongoose from 'mongoose';
import Department from '../models/department';

function createDepartment(){

    this.postdepartment=(res,req)=>{
      console.log(req.body)
        const department = new Department({
            _id: mongoose.Types.ObjectId(),
            dkid: req.body.dkid,
            name: req.body.name,           
            isActive:true
        });
        return department
        .save()
        .then((newCause) => {
          return res.status(201).json({
            success: true,
            message: 'position created successfully',
            department: newCause,
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

    this.getAlldepartment=(req,res)=>{

      return Department.find().then((resd)=>{
           return res.status(201).json({
               success: true,
               message: 'Position table fetched successfully',
               Department: resd,
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
module.exports = new createDepartment();
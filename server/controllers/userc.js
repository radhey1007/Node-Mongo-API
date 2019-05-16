import mongoose from "mongoose";
import User from "../models/user";
// import Cause from '../models/cause';

// create new cause
function createUser() {
  this.registeruser = (req, res) => {
    var randomstring = Math.random()
      .toString(36)
      .slice(-8);
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      address: req.body.address,
      password: randomstring,
      isActive: true,
      positionid: req.body.positionid,
      departmentid: req.body.departmentid
    });
    return user
      .save()
      .then(newCause => {
        return res.status(201).json({
          success: true,
          message: "User created successfully",
          User: newCause
        });
      })
      .catch(error => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: error.message
        });
      });
  };

this.login=(req,res)=>{

  return User.find({name:req.body.name,password:req.body.password}).select("_id name address isActive password").then(resd => {
  return res.status(200).json({
    success: true,
    message: "User fetched successfully",
    User: resd
  });
})
.catch(err => {
  res.status(304).json({
    success: false,
    message: "Server error. Please try again.",
    error: err.message
  });
});
}

  this.getAlluser = (req, res) => {
    /** Pagination Implementation */
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);
    var query = {};
    if (pageNo < 0 || pageNo === 0) {
      return res.status(304).json({
        error: true,
        message: "invalid page number, should start with 1"
      });
    }
    query.skip = size * (pageNo - 1);
    query.limit = size;
    console.log(query);
    /** Pagingnation Implimentation */
    return User.find({},{ isActive: true }, query)
      .select("_id name address isActive password")
      .then(resd => {
        return res.status(201).json({
          success: true,
          message: "User fetched successfully",
          User: resd
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message
        });
      });
  };

  this.getUserByID = (req, res) => {
    const id = req.params.id;
    console.log("*********************USerID*******************" + id);
    return User.findById(id)
      .select("_id name address isActive password")
      .then(resd => {
        return res.status(201).json({
          success: true,
          message: "User fetched successfully",
          User: resd
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message
        });
      });
  };
  this.updatedata = (req, res) => {
    const id = req.params.id;
    console.log("*********************USerID*******************" + id);
    const updateObject = req.body;
    console.log(
      "*********************updateObject*******************" + updateObject
    );

    return User.update({ _id: id }, { $set: updateObject })
      .exec()
      .then(resd => {
        return res.status(201).json({
          success: true,
          message: "User Data Updated  successfully",
          User: resd
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message
        });
      });
  };

  this.deleteUserData = (req, res) => {
    const id = req.params.id;
    return User.findByIdAndRemove(id)
      .exec()
      .then(resd => {
        return res.status(201).json({
          success: true,
          message: "User Deleted  successfully",
          User: resd
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message
        });
      });
  };

  this.multipledeleteuserData = (req, res) => {
    const ids = req.body.id;
    const updateObject = { isActive: req.body.isActive };
    const isActive = req.body.type;
    console.log(ids);

    return User.updateMany({ _id: { $in: ids } }, { $set: updateObject })
      .exec()
      .then(resd => {
        return res.status(201).json({
          success: true,
          message: `All User's ${isActive}  successfully`,
          User: resd
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message
        });
      });
  };
  /** Using Aggregrate Lookup method for join multiple collection information */

  this.fetchinfo = (req, res) => {
    /** Pagination Implementation */
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);
    var query = {};
    if (pageNo < 0 || pageNo === 0) {
      return res.status(304).json({
        error: true,
        message: "invalid page number, should start with 1"
      });
    }
    query.skip = size * (pageNo - 1);
    query.limit = size;
    console.log(query);
    /** Pagingnation Implimentation */
    return User.aggregate([{'$skip':query.skip},{'$limit':query.limit}])
      .lookup({
        from: "positions",
        localField: "positionid",
        foreignField: "pkid",
        as: "Position"
      })
      .lookup({
        from: "departments",
        localField: "departmentid",
        foreignField: "dkid",
        as: "Department"
      })
      .project({
        _id: 1,
        name: 1,
        address: 1,
        isActive: 1,
        position: "$Position.name",
        department: "$Department.name"
      })
      .exec()
      .then(resd => {
        return res.status(201).json({
          success: true,
          message: `Data Fetched successfully`,
          User: resd
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message
        });
      });
  };
}

module.exports = new createUser();

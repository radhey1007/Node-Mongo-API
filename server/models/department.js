import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const department = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dkid: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },  
  isActive:{
    type: Boolean,
    required: false,
  },
});
export default mongoose.model('Department', department);
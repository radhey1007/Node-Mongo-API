import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const position = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  pkid: {
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
export default mongoose.model('Position', position);
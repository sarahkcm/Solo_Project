import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import pkg from 'validator';
const { isEmail } = pkg;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [6, "Minimum password length must be 6 characters"],
  },
  admin: {
    type:Boolean,
    required: true
  }
});

// UserSchema.pre('save', async function(next) {
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model("User", UserSchema);
export default User;

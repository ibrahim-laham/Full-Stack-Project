import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
};



const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  }
});

export default mongoose.model<UserDocument>("User", userSchema);

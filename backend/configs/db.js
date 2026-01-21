import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/authentication`);
    console.log("MongoDB Connected Successfully 🟢");
  } catch (error) {
    console.error("MongoDB connection failed: 🔴", error.message);
    process.exit(1);
  }
};

export default connectDB;
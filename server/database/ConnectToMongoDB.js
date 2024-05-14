import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default ConnectToMongoDB
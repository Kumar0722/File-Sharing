import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;

  const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hpujknh.mongodb.net/`;
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Databse connected successfully");
  } catch (error) {
    console.log("Error while connecting with databse ", error.message);
  }
};

export default DBConnection;

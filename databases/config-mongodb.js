import dotenv from "dotenv";

dotenv.config();

export const getMongoDbConfiguration = () => {
  return process.env.CONNECTION_STRING_MONGODB;
};
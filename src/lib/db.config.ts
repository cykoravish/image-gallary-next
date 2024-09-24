import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/image-gallary-nextjs");
    console.log("DB connected ", mongoose.connection.host);
  } catch (error) {
    console.log("error in db connection: ", error);
    mongoose.disconnect();
    process.exit(1);
  }
};

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/syntheticportal", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((err) => console.error(err));

export const db = mongoose.connection;

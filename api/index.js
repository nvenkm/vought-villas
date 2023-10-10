import express from "express";
import mongoose from "mongoose";
import env from "dotenv";

import userRouter from "./routes/user.route.js";

env.config();

const uri = process.env.URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e.message);
  });

const app = express();

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server Running on PORT 3000!");
});

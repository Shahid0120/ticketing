import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import jwt from "jsonwebtoken";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "../middewares/error-handlers";
import { NotFoundErorr } from "./erros/not-found-error";
const app = express();

app.use(json());
app.set("trust proxy", true);
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.all("*", async (req, res) => {
  throw new NotFoundErorr();
});
app.use(errorHandler);
const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to DB using mongoose...");
  } catch {
    console.error("DB error");
  }
  app.listen(3000, () => {
    console.log("listening on port 3000...");
  });

};

start();

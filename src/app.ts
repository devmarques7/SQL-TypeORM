import "reflect-metadata";
import express from "express";
import usersRouter from "../src/routes/user.routes";

const app = express();
app.use(express.json());
app.use("", usersRouter);

export default app;

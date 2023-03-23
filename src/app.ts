import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import { errorHandler } from "./errors";
import { clientRouter, contactRouter, sessionRouter } from "./routes";

//INSTANCIA EXPRESS
const app = express();
app.use(json());

//ROTAS
app.use("/client", clientRouter);
app.use("/contacts", contactRouter);
app.use("/login", sessionRouter);

app.use(errorHandler);

export default app;

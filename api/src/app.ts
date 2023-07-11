// server here
import Express from "express";
import cors from "cors";

import productsRouter from "./routes/products";
import usersRouter from "./routes/users";
import ordersRouter from "./routes/orders";
import apiErrorHandler from "./middlewares/apiErrorHandler";


const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/orders", ordersRouter);

app.use(apiErrorHandler);

export default app;

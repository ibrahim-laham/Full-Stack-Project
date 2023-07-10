// server here
import Express from "express";

import productsRouter from "./routes/products";
import usersRouter from "./routes/users";

const app = Express();

app.use(Express.json());

app.use("/products", productsRouter);
app.use("/users", usersRouter);

export default app;

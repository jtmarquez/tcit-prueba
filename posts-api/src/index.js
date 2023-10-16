import express from "express";
import { setupApiRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { jsonBodyParserMiddleware } from "./middlewares/jsonParserMiddleware";
import { corsMiddleware } from "./middlewares/corsMiddleware";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(jsonBodyParserMiddleware);
app.use(corsMiddleware);

setupApiRoutes(app);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Listenining on port ${PORT}`)
});
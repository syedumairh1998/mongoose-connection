import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { router } from "./routes/userRoutes.js";
import { createDBConnection } from "./config/createDBConnections.js";

(async () => {
  dotenv.config();
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  await createDBConnection();

  app.use("/user", router);

  const port = process.env.port || 4000;
  app.listen(port, () => console.log("port running at ", port));
})();

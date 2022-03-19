import express, { Request, Response, Application } from "express";
import cors from "cors";
import env from "dotenv";

import moduleAlias from "module-alias";

const PORT: string | number = process.env.PORT || 4000;

env.config();
moduleAlias.addAliases({
  "@controllers": `${__dirname}/controllers`,
  "@db": `${__dirname}/database`,
  "@helpers": `${__dirname}/helpers`,
  "@router": `${__dirname}/router`,

  "@services": `${__dirname}/services`,
  "@types": `${__dirname}/types`,
});

const app: Application = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("GET request to the homepage");
});
app.listen(PORT, () => {
  console.log("running");
});

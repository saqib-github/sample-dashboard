import express from "express";
import pkg from "mongoose";
const { connect, set } = pkg;
import cors from "cors";
import chartofaccounts from "./routes/chartofAccounts.js";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());
app.use(cors());

//middleware
app.use("/chartofaccounts", chartofaccounts);

// connect to database
set("useNewUrlParser", true);
set("useFindAndModify", false);
set("useCreateIndex", true);
set("useUnifiedTopology", true);

connect(process.env.DB_CONNECTION)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(3000);

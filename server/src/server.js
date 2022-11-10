const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("../db/connect");
const walletRouter = require("../routes/wallet.js");
const authRoute = require("../routes/auth");
const adminRouter= require("../routes/admin")

const PORT = process.env.PORT || 8000;

require("dotenv").config();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/auth/", authRoute);
app.use("/api/v1/wallet/", walletRouter);
app.use("/api/v1/admin/", adminRouter);

(async () => {
  const pool = await dbConnect();
  app.listen(PORT, () => {
    return console.log(`Running on http://localhost:${PORT}`);
  });
})();

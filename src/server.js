const express = require('express');
const app = express();
const dbConnect = require('../db/connect');
const walletRouter = require('../routes/wallet.js');
const authRoute = require('../routes/auth');

require('dotenv').config();

//Middleware
app.use(express.json());

//Routes 
app.use('/api/v1/auth/', authRoute);
app.use('/api/v1/wallet/', walletRouter);

(async () => {
  const pool = await dbConnect();
  app.listen(3000, () => console.log('Server Running'));
})();


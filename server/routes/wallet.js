const { getalltransactions, getusers } = require("../controllers/admin");
const {
  walletinfo,
  setPin,
  sendMoney,
  addFav,
  favNum,
  updateFav,
  deleteFav,
  getbalance,
  deleteuser,
} = require("../controllers/wallet");

const { updateFavNumber } = require("../db/query");
const { authVerify, adminVerify } = require("../middlewares/verifyToken");
const router = require("express").Router();

router.get("/", authVerify, walletinfo);
router.post("/setpin", authVerify, setPin);
router.post("/sendmoney", authVerify, sendMoney);
router.get("/transaction", authVerify, getalltransactions);
router.delete("/deleteuser/:id", authVerify, adminVerify, deleteuser);
router.get("/users", authVerify, getusers);
router.post("/addfav", authVerify, addFav);
router.get("/favs", authVerify, favNum);
router.put("/update", authVerify, updateFav);
router.delete("/delete/:id", authVerify, deleteFav);
router.get("/dashboard", authVerify, getbalance);

module.exports = router;

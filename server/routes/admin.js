const { loginAdmin } = require("../controllers/admin");
const router = require("express").Router();

router.post("/",loginAdmin);
router.get("/");
module.exports = router;
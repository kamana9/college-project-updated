const { walletinfo, registerWallet } = require('../controllers/wallet');
const authVerify = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/',authVerify, walletinfo);
router.post('/register',authVerify,registerWallet);

module.exports = router;
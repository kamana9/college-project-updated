const { walletinfo, setPin, sendMoney,  } = require('../controllers/wallet');
const authVerify = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/',authVerify, walletinfo);
router.post('/setpin',authVerify, setPin);
router.post('/sendmoney',authVerify, sendMoney);

module.exports = router;
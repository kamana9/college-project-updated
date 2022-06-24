const { walletinfo, setPin, sendMoney,addFav,favNum,updateFav, deleteFav  } = require('../controllers/wallet');
const { updateFavNumber } = require('../db/query');
const authVerify = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/',authVerify, walletinfo);
router.post('/setpin',authVerify, setPin);
router.post('/sendmoney',authVerify, sendMoney);
router.post('/addfav',authVerify, addFav);
router.get('/favs',authVerify,favNum);
router.put('/update',authVerify,updateFav);
router.delete('/delete',authVerify,deleteFav);
module.exports = router;
const express = require('express');
const { registerUser,loginUser,logOutUser } = require('../../controllers/auth-controller/index');
const authMiddleware = require('../../middleware/auth-middleware')
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logOutUser);

router.get('/check-auth',authMiddleware,(req,res)=>{
    const user = req.user;
    res.status(200).json({
        success: true,
        message: 'User authenticated successfully',
        data:{user}
    })
})

module.exports = router;

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
function requireAuth(req, res, next){
    if(req.isAuthenticated()){
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        res.redirect("/users/signin");
    }
}
router.get('/',requireAuth, controlerIndex.home);

module.exports = router;

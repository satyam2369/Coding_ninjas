var express = require('express');
const user = require('../models/user');
const { createToken, getDataFromToken } = require('../service/userService');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createAccount', async function(req, res, next){
  const check = await user.findOne({email:req.body.email});
  if(!check){
    const createdUser = await user.create(req.body);
    res.json(createdUser);
    return;
  }
  res.json(null);
  
})


router.post('/login', async function(req, res, next){
  try {
    const { email, Password } = req.body;
    const check = await user.findOne({ email: email, Password: Password });
  
    if (check) {
      const token = createToken({ username: check.name });
      console.log(token);
      
      res.cookie("jwt", token, {
        httpOnly: true, // Set to true for security
        // secure: false, // Set to true if using HTTPS
        // sameSite: 'Lax' // Helps with CSRF protection
        maxAge: 24 * 60 * 60 * 1000
      });

      console.log("Cookie set");
      return res.json("true"); // Return after setting cookie
    } else {
      res.json("login failed");
    }
  } catch (error) {
    next(error);
  }
});


router.get('/checkLogin', async function(req, res, next){
  const token = req.cookies.jwt;
  console.log("ye hai token");
  console.log(token);
  if(token == null) {

    res.json( null);
  }
  else{
    console.log(getDataFromToken(token));
  res.json( getDataFromToken(token));
  }
}) 

// router.post('/checkAvailability', async function(req, res, next){
//   const {email} = req.body;
//   const check = await user.findOne({email: email});

//   if(check){
//     res.json("notAvailable");

//   }
//   else{
//     res.json("Available");
//   }
// })



module.exports = router;

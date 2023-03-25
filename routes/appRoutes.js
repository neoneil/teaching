const express = require('express');
const router = express.Router();
const User_controllers = require('../controller/users_controller')
router.get('/users', User_controllers.Users);
router.post('/user/:id', User_controllers.One_user)
router.post('/user', User_controllers.Save_user)
module.exports = router



// module.exports = router

// module.exports = function (app) {
// // mongodb
// let Mongo_user = require("../model_mongo/mongo_users");
// app.post('/user', async (req, res) => { 
//     try {
//       const newUser = await Mongo_user.create(req.body);
//       res.status(200).json(newUser);
//     }
//     catch(error){
//       res.status(400).json({message: error.message});
//     }
//   });
//  app.route('/api/').get(User_controllers.users)
// };
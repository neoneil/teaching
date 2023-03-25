const User = require('../model_mongo/mongo_users')

const Users = (req, res, next) => {
    User.find()
    .then(response =>{
        res.json({response})
    })
    .catch(error => {
        res.json({ message: 'find users error'})
    })
}

const One_user = (req, res, next) => {
    console.log(req.body.id)
    User.findById(req.body.id)
    .then(response =>{
        res.json({response})
    })
    .catch(error => {
        res.json({ message: 'find users error'})
    })
}
const Save_user = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        exam: req.body.exam,
        current_level: req.body.current_level,
        aim: req.body.aim,
        purpose: req.body.purpose,
        deadline: req.body.deadline
    })
    user.save()
    .then(response =>{
        res.json({response})
    })
    .catch(error => {
        res.json({ message: 'find users error'})
    })
}




module.exports = {Users, One_user, Save_user};
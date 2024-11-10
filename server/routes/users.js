const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User')
const auth = require('../middleware/auth')


// router.post('/users', async (req, res) => {
//   const user = new User(req.body)

//   try {
//       await user.save()
//       const token = await user.generateAuthToken()
//       res.status(201).send({ user, token })
//   } catch (e) {
//       res.status(400).send(e)
//   }
// })

router.post('/register', async (req, res) => {
  try {
    const {name, email, password, isAdmin, interests} = req.body;
    const user = new User({name, email, password, isAdmin, interests});
    const token = await user.generateAuthToken();
    await user.save();
    console.log(user);
    res.status(201).send('success')
  } catch (error) {
    res.status(400).send(error)
  }

})

router.get('/me', async (req, res) => {
  User.find({}).then(users => res.send(users)).catch(e => res.status(500).send('Server is down'))
})

router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  User.findById(_id).then((user)=>{
    if(!user) {
      res.status(404).send("User not found")
    }
    res.send(user)
  }).catch(e=>res.status(500).send("User not found"))
})

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (!user) {
      throw new Error('Unable to login')
    }
      res.status(200).send({ user})
  } catch (e) {
      res.status(400).send()
  }
})

module.exports = router;
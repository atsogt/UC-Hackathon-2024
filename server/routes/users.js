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
    await user.save();
    res.status(201).send({ message: 'Registration successful', userId: user._id })
  } catch (error) {
    res.status(400).send(error.message || 'Registration failed')
  }
})

router.patch('/users/:userId/interests', async (req, res) => {
  try {
    const { userId } = req.params;
    const { interests } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's   
 interests
    user.interests = interests;

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: 'Interests updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

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
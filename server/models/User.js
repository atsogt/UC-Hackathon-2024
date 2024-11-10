const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
          if (!validator.isEmail(value)) {
              throw new Error('Email is invalid')
          }
      }
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: { type: Boolean, default: false },
    interests: {type: Array, default: []
    //   , validate(value) {
    //   if(!this.isAdmin && value.length < 5) {
    //     throw new Error('Need atleast 5 interests')
    //   }
    // }
  }
  // ,
  //   tokens: [
  //     {
  //       token: {
  //         type: String,
  //         required: true
  //       }
  //     }
  //   ]
});

userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject
}

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

userSchema.statics.findByCredentials = async (email, password) => {

  const user = await User.findOne( email )
console.log(user);
  // if (!user) {
  //     throw new Error('Unable to login')
  // }

  // const isMatch = await bcrypt.compare(password, user.password)

  // if (!isMatch) {
  //     throw new Error('Unable to login')
  // }

  return user
}

userSchema.pre('save', async function (next) {
  const user = this

  // if (user.isModified('password')) {
      // user.password = await bcrypt.hash(user.password, 8)
  // }

  next()
})

module.exports = mongoose.model('User', userSchema);
const express = require('express');
require("dotenv").config();
const cors = require("cors");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const router = express.Router();
// const mongoPassword = process.env.MONGO_PASSWORD;
const mongoURI = process.env.MONGO_URI;
const User = require('./models/User');
const userRouter = require('./routes/users');
const bodyParser = require('body-parser');



// const newStudent = new Student({
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   password: 'your_strong_password',
//   isAdmin: false,
//   interests: ['coding', 'gaming', 'reading']
// });

// const myFunction = async () => {
//   const password = '12345'
//   const hashedPassword = await bcrypt.hash(password, 8)
//   console.log(hashedPassword)
//   //see if this password is a match
//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch)
// }

// myFunction()

// newStudent.save()
//   .then(savedStudent => {
//     console.log('Student saved successfully:', savedStudent);
//   })
//   .catch(err => {
//     console.error('Error saving student:', err);
//   });

const app = express();
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
const port = 3001 || process.env.PORT;

app.use('/users', userRouter)

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

// app.get('/', (req, res) => {
//   res.send("Hello from hackathon UC")
// })

// app.get('/user', (req, res) => {
//   res.send("My name is Anand Tsogtbaatar")
// })
// router.get('/',(req,res)=> {
//   console.log('hello')
//   res.send('hello');
// })

// router.post('/users', async (req, res) => {
//   // const user = new Student(req.body)
// console.log('hello')
//   // try {
//   //     await user.save()
//   //     const token = await user.generateAuthToken()
//   //     res.status(201).send({ user, token })
//   // } catch (e) {
//   //     res.status(400).send(e)
//   // }
// })

app.listen(3001,()=>{
  console.log(`Listening on port ${port}`);
})
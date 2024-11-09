const express = require('express');
require("dotenv").config();
const cors = require("cors");
const mongoose = require('mongoose');
// const mongoPassword = process.env.MONGO_PASSWORD;
const mongoURI = process.env.MONGO_URI;
const Student = require('./models/Students');

const newStudent = new Student({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'your_strong_password',
  isAdmin: false,
  interests: ['coding', 'gaming', 'reading']
});

newStudent.save()
  .then(savedStudent => {
    console.log('Student saved successfully:', savedStudent);
  })
  .catch(err => {
    console.error('Error saving student:', err);
  });

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001 || process.env.PORT;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

app.get('/', (req, res) => {
  res.send("Hello from hackathon UC")
})

app.get('/user', (req, res) => {
  res.send("My name is Anand Tsogtbaatar")
})

app.listen(3001,()=>{
  console.log(`Listening on port ${port}`);
})
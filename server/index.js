const express = require('express');
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001 || process.env.PORT;

app.get('/', (req, res) => {
  res.send("Hello from hackathon UC")
})

app.get('/user', (req, res) => {
  res.send("My name is Anand Tsogtbaatar")
})

app.listen(3001,()=>{
  console.log(`Listening on port ${port}`);
})